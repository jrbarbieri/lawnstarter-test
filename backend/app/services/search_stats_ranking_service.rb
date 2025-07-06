# frozen_string_literal: true

class SearchStatsRankingService
  REDIS_KEY = "ranking-json"

  def self.generate_and_store!
    result = generate
    redis.set(REDIS_KEY, result.to_json)
  end

  def self.read_from_redis
    data = redis.get(REDIS_KEY)
    data = data ? JSON.parse(data) : {}
    {
      person_ranking: data["person_ranking"] || [],
      movie_ranking: data["movie_ranking"] || [],
      most_searched: data["most_searched"] || []
    }
  end

  def self.generate
    stats = fetch_stats
    return empty_result if stats.empty?

    rankings = build_rankings(stats)
    most_searched = find_most_searched(stats)

    {
      person_ranking: rankings["person_ranking"] || [],
      movie_ranking: rankings["movie_ranking"] || [],
      most_searched: most_searched || []
    }
  end

  private

  def self.redis
    @redis ||= Redis.new(url: ENV["REDIS_URL"] || "redis://localhost:6379/0")
  end

  def self.fetch_stats
    SearchStat.group(:kind, :query).sum(:count)
  end

  def self.empty_result
    {
      person_ranking: [],
      movie_ranking: [],
      most_searched: []
    }
  end

  def self.build_rankings(stats)
    rankings = {}
    stats.group_by { |(kind, _), _| kind }.each do |kind, kind_stats|
      total_count = kind_stats.sum { |_, count| count }
      top_five = kind_stats.sort_by { |_, count| -count }.first(5)
      ranking = top_five.each_with_index.map do |((_, query), count), index|
        percent = ((count.to_f / total_count) * 100).round
        [ index + 1, query, "#{percent}%" ]
      end
      rankings["#{kind}_ranking"] = ranking
    end
    rankings
  end

  def self.find_most_searched(stats)
    entry = stats.max_by { |_, count| count }
    return [] unless entry
    kind, query = entry[0]
    [ kind, query ]
  end
end

class SwapiService
  BASE_URL = ENV["SWAPI_BASE_URL"]

  def self.search_people(query)
    increment_stat("person", query)
    response = Faraday.get("#{BASE_URL}/people", { name: query })
    JSON.parse(response.body)
  end

  def self.fetch_person(id)
    response = Faraday.get("#{BASE_URL}/people/#{id}")
    JSON.parse(response.body)
  end

  def self.search_movies(query)
    increment_stat("movie", query)
    response = Faraday.get("#{BASE_URL}/films", { title: query })
    JSON.parse(response.body)
  end

  def self.fetch_movie(id)
    response = Faraday.get("#{BASE_URL}/films/#{id}")
    JSON.parse(response.body)
  end

  private

  def self.increment_stat(kind, query)
    return if query.blank?

    stat = SearchStat.find_or_initialize_by(kind: kind, query: query)
    stat.count ||= 0
    stat.count += 1
    stat.save!
  end
end

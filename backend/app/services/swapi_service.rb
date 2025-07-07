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

  def self.raw_fetch(url)
    response = Faraday.get(url)
    JSON.parse(response.body)
  end

  def self.person_with_movies(person_id)
    person = fetch_person(person_id)
    return nil unless person["result"]

    all_movies = search_movies("")
    matched_movies = all_movies["result"].select do |movie|
      characters = movie.dig("properties", "characters") || []
      characters.any? { |url| url.end_with?("/#{person_id}") }
    end

    props = person.dig("result", "properties") || {}
    height_m = props["height"].to_f / 100 if props["height"]
    mass_kg = props["mass"].to_f if props["mass"]

    {
      uid: person["result"]["uid"],
      name: person["result"].dig("properties", "name"),
      movies: matched_movies.map { |m| { uid: m["uid"], title: m.dig("properties", "title") } },
      details: {
        birth_year: props["birth_year"],
        eye_color: props["eye_color"],
        gender: props["gender"],
        hair_color: props["hair_color"],
        height: height_m,
        mass: mass_kg
      }
    }
  end

  def self.movie_with_characters(movie_id)
    movie = fetch_movie(movie_id)
    characters_urls = movie.dig("result", "properties", "characters") || []

    characters = characters_urls.map do |url|
      Thread.new do
        begin
          response = raw_fetch(url)
          {
            uid: response["result"]["uid"],
            name: response["result"].dig("properties", "name")
          }
        rescue => e
          Rails.logger.error("Error trying fetch character: #{e.message}")
          nil
        end
      end
    end.map(&:value).compact

    details = movie.dig("result", "properties") || {}

    {
      title: movie["result"].dig("properties", "title"),
      uid: movie["result"]["uid"],
      characters: characters,
      details: {
        producer: details["producer"],
        title: details["title"],
        director: details["director"],
        release_date: details["release_date"],
        opening_crawl: details["opening_crawl"]
      }
    }
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

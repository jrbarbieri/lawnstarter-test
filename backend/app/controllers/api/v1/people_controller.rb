module Api
  module V1
    class PeopleController < ApplicationController
      def index
        results = SwapiService.search_people(params[:q])
        render json: ::PeopleSerializer.collection(results)
      end

      def with_movies
        person_id = params[:id]
        person = SwapiService.fetch_person(person_id)
        return render json: {}, status: :not_found unless person["result"]

        all_movies = SwapiService.search_movies("")
        matched_movies = all_movies["result"].select do |movie|
          characters = movie.dig("properties", "characters") || []
          characters.any? { |url| url.end_with?("/#{person_id}") }
        end

        render json: {
          uid: person["result"]["uid"],
          name: person["result"].dig("properties", "name"),
          movies: matched_movies.map do |m|
            {
              uid: m["uid"],
              title: m.dig("properties", "title")
            }
          end
        }
      end
    end
  end
end

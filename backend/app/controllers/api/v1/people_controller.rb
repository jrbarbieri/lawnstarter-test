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

        props = person.dig("result", "properties") || {}
        height_m = props["height"].to_f / 100 if props["height"]
        mass_kg = props["mass"].to_f if props["mass"]

        render json: {
          uid: person["result"]["uid"],
          name: person["result"].dig("properties", "name"),
          movies: matched_movies.map do |m|
            {
              uid: m["uid"],
              title: m.dig("properties", "title")
            }
          end,
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
    end
  end
end

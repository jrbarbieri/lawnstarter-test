module Api
  module V1
    class MoviesController < ApplicationController
      def index
        results = SwapiService.search_movies(params[:q])
        render json: ::MovieSerializer.collection(results)
      end

      def with_characters
        movie = SwapiService.fetch_movie(params[:id])
        characters_urls = movie.dig("result", "properties", "characters") || []

        characters = characters_urls.map do |url|
          Thread.new do
            begin
              response = SwapiService.raw_fetch(url)
              {
                uid: response["result"]["uid"],
                name: response["result"].dig("properties", "name")
              }
            rescue => e
              Rails.logger.error("Erro ao buscar personagem: #{e.message}")
              nil
            end
          end
        end.map(&:value).compact

        details = movie.dig("result", "properties") || {}

        render json: {
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
    end
  end
end

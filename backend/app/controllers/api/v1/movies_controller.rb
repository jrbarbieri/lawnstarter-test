module Api
  module V1
    class MoviesController < ApplicationController
      def index
        results = SwapiService.search_movies(params[:q])
        render json: ::MovieSerializer.collection(results)
      end

      def with_characters
        result = SwapiService.movie_with_characters(params[:id])
        render json: result
      end
    end
  end
end

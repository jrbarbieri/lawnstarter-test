module Api
  module V1
    class MoviesController < ApplicationController
      def index
        results = SwapiService.search_movies(params[:q])
        render json: ::MovieSerializer.collection(results)
      end

      def show
        movie = SwapiService.fetch_movie(params[:id])
        render json: ::MovieSerializer.single(movie)
      end
    end
  end
end

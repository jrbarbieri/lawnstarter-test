module Api
  module V1
    class PeopleController < ApplicationController
      def index
        results = SwapiService.search_people(params[:q])
        render json: ::PeopleSerializer.collection(results)
      end

      def with_movies
        result = SwapiService.person_with_movies(params[:id])
        if result
          render json: result
        else
          render json: {}, status: :not_found
        end
      end
    end
  end
end

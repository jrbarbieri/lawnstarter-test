module Api
  module V1
    class PeopleController < ApplicationController
      def index
        results = SwapiService.search_people(params[:q])
        render json: ::PeopleSerializer.collection(results)
      end

      def show
        person = SwapiService.fetch_person(params[:id])
        render json: ::PeopleSerializer.single(person)
      end
    end
  end
end

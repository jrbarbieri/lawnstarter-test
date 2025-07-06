require "redis"
require_relative "../../../services/search_stats_ranking_service"

module Api
  module V1
    class SearchStatsController < ApplicationController
      def index
        render json: SearchStatsRankingService.read_from_redis, status: :ok
      end
    end
  end
end

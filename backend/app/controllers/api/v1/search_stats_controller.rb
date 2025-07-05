module Api
  module V1
    class SearchStatsController < ApplicationController
      def index
        stats = SearchStat
                  .select(:kind, :query, :count)
                  .order(kind: :asc, count: :desc)

        grouped = stats.group_by(&:kind).transform_values do |items|
          items.map do |item|
            {
              query: item.query,
              count: item.count
            }
          end
        end

        render json: grouped
      end
    end
  end
end

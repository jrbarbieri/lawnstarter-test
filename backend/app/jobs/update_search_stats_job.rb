# frozen_string_literal: true

class UpdateSearchStatsJob < ApplicationJob
  queue_as :default

  def perform
    SearchStatsRankingService.generate_and_store!
  end
end

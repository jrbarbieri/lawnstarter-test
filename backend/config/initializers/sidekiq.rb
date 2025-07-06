require "sidekiq"
require "sidekiq-scheduler"

Sidekiq.configure_server do |config|
  config.on(:startup) do
    schedule_file = File.expand_path("../sidekiq.yml", __dir__)
    if File.exist?(schedule_file)
      schedule = YAML.load_file(schedule_file)
      Sidekiq.schedule = schedule[:schedule] || schedule["schedule"]
      Sidekiq::Scheduler.reload_schedule!
    end
  end
end

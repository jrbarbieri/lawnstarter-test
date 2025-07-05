Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :people, only: [ :index, :show ]
      resources :movies, only: [ :index, :show ]
      resources :search_stats, only: [ :index ]
    end
  end
end

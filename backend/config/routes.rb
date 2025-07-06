Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :search_stats, only: [ :index ]
      resources :people, only: [ :index ] do
        member do
          get :with_movies
        end
      end
      resources :movies, only: [ :index ] do
        member do
          get :with_characters
        end
      end
    end
  end
end

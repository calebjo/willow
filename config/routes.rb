Rails.application.routes.draw do
    root to: 'static_pages#root'
  
    namespace :api, defaults: {format: :json} do
        resource :session, only: [:create, :destroy]

        resources :users, only: [:create, :show]
        resources :properties
        resources :saved_homes
        resources :saved_searches
    end
end
Rails.application.routes.draw do
  resources :tweets
  get 'search', to: "tweets#search"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "tweets#index"
end

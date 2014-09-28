Rails.application.routes.draw do
  resources :topics

  resources :problems

  resources :courses

  root to: 'visitors#index'
end

Rails.application.routes.draw do
  get 'tags/index'

  devise_for :users
  root 'prototypes#index'

  resources :prototypes, only: [:index, :new, :create, :show, :edit, :update]
  resources :users, only: [:show, :edit, :update]
  resources :tags, only: [:index, :show]
end

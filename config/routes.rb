Rails.application.routes.draw do
  devise_for :users
  root "items#index"
  resources :items do
    resources :images
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


end

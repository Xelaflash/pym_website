Rails.application.routes.draw do
  root to: 'pages#home'

  get 'pages/profil'
  get 'pages/informations'
  get 'pages/intervenant'
  get 'pages/therapie'
  get 'pages/contact'

  devise_for :users
end

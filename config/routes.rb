Rails.application.routes.draw do
  root to: 'pages#home'

  get 'pages/profil'
  get 'pages/tcce'
  get 'pages/intervenant'
  get 'pages/therapie'
  get 'pages/contact'
  get 'pages/legal'

  devise_for :users
end

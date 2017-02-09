class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # makes controller throw a null session because app will request json, which is different than html, which is default
  protect_from_forgery with: :null_session
end

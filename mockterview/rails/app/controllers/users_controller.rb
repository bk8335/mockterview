class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user
  end

  def show
    user = User.find(params[:id])
    render :json => user
  end

end
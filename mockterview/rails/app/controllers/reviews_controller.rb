class ReviewsController < ApplicationController

  before_action :authenticate_user!

  def index
    reviews = Review.all
    render :json => reviews.as_json({ include: [:user, :interviewer]})
  end

  def show
    review = Review.find(params[:id])
    render :json => review
  end

  def create
    new_review = Review.create!({
      rating: params[:rating],
      user_id: current_user.id,
      interviewer_id: params[:interviewer_id],
      personal_review: params[:personal_review]   
      })

    render :json => new_review 
  end
end
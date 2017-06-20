class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render :json => reviews.as_json({ include: [:user, :interviewer]})
  end

  def show
    review = Review.find(params[:id])
    render :json => review
  end
end
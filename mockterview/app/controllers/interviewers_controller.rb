class InterviewersController < ApplicationController

  def index
    interviewers = Interviewer.all
    render :json => interviewers
  end

end
class InterviewersController < ApplicationController

  def index
    interviewers = Interviewer.all
    render :json => interviewers
  end

  def show
    interviewer = Interviewer.find(params[:id])
    render :json => interviewer
  end

  def destroy
    interviewer = Interviewer.find(params[:id])
    if(interviewer.destroy!)
      render :json => {status: "success!"}
    else
      render :json => {status: "destroy interviewer failed"}
    end
  end

end
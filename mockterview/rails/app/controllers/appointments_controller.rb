class AppointmentsController < ApplicationController

before_action :authenticate_user!

def index
  appointments = Appointment.all
  render :json => appointments
end

def show
  appointment = Appointment.find(params[:id])
  render :json => appointment
end

def create

  new_appointment = Appointment.create!({
    time: params[:time],
    user_id: current_user.id,
    User_username: current_user.username,
    InterviewerName: params[:InterviewerName],
    interviewer_id: params[:interviewer_id],
    further_details: params[:further_details]   
    })

  render :json => new_appointment 
end 

end
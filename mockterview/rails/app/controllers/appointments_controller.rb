class AppointmentsController < ApplicationController

before_action :authenticate_user!

def index
  appointments = Appointment.all
  render :json => appointments.as_json({include: [:interviewer, :user]})
end

def show
  appointment = Appointment.find(params[:id])
  render :json => appointment
end

def create

  new_appointment = Appointment.create!({
    time: params[:time],
    user_id: current_user.id,
    interviewer_id: params[:interviewer_id],
    further_details: params[:further_details]   
    })

  render :json => new_appointment 
end

def destroy
  appointment = Appointment.find(params[:id])

  if(appointment.destroy!)
    render :json => {appointment: appointment}
  else
    render :json => {appointment: false}
  end
end

end
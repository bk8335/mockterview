class AppointmentsController < ApplicationController

def index
  appointments = Appointment.all
  render :json => appointments
end

def show
  appointment = Appointment.find(params[:id])
  render :json => appointment
end

def create
  new_appointment = Appointment.create(appointment_params)
  render :json => new_appointment 
end 

end
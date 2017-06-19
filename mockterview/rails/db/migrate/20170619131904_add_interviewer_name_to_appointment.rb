class AddInterviewerNameToAppointment < ActiveRecord::Migration
  def change
    add_column :appointments, :InterviewerName, :string
  end
end

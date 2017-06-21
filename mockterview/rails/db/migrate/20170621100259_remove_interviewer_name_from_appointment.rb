class RemoveInterviewerNameFromAppointment < ActiveRecord::Migration
  def change
    remove_column :appointments, :InterviewerName
  end
end

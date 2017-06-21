class RemoveUserUsernameFromAppointment < ActiveRecord::Migration
  def change
    remove_column :appointments, :User_username
  end
end

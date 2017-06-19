class AddUserUsernameToAppointment < ActiveRecord::Migration
  def change
    add_column :appointments, :User_username, :string
  end
end

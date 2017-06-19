class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :time
      t.string :further_details
      t.references :user, index: true, foreign_key: true
      t.references :interviewer, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

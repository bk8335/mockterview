class CreateInterviewers < ActiveRecord::Migration
  def change
    create_table :interviewers do |t|
      t.string :name
      t.string :email
      t.string :one_line_bio
      t.string :industries
      t.string :experience_level
      t.string :availability

      t.timestamps null: false
    end
  end
end

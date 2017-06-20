class AddRatingToInterviewer < ActiveRecord::Migration
  def change
    add_column :interviewers, :rating, :integer
  end
end

class AddReviewToInterviewer < ActiveRecord::Migration
  def change
    add_column :interviewers, :review, :string
  end
end

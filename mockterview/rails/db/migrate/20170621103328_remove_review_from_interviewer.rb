class RemoveReviewFromInterviewer < ActiveRecord::Migration
  def change
    remove_column :interviewers, :review
  end
end

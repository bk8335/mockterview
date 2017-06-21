class RemoveRatingFromInterviewer < ActiveRecord::Migration
  def change
    remove_column :interviewers, :rating
  end
end

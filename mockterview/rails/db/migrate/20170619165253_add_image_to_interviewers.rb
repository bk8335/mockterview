class AddImageToInterviewers < ActiveRecord::Migration
  def change
    add_column :interviewers, :image, :string
  end
end

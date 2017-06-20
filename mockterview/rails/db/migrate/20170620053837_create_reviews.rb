class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :personal_review
      t.references :user, index: true, foreign_key: true
      t.references :interviewer, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

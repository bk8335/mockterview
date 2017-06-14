class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :experience_level
      t.string :job_industry
      t.string :target_job

      t.timestamps null: false
    end
  end
end

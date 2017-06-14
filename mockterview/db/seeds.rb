# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all()
Interviewer.delete_all()

User.create!({
  username: "KinnyKin",
  email: "ben@gmail.com",
  experience_level: "Junior",
  job_industry: "Technology",
  target_job: "Junior Dev",
  password: "password1",
  password_confirmation: "password1"
})

Interviewer.create!({
  name: "Leigh-Ann",
  email: "leighann@codeclan.com",
  one_line_bio: "CodeClan momma bear",
  industries: "tech",
  experience_level: "all",
  availability: "6-10pm, 6-8am"
  })

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Appointment.destroy_all()
Review.destroy_all()
User.destroy_all()
Interviewer.delete_all()

user1 = User.create!({
  username: "BennyK",
  email: "ben@gmail.com",
  experience_level: "Junior",
  job_industry: "Technology",
  target_job: "Junior Dev",
  password: "password1",
  password_confirmation: "password1"
})

user2 = User.create!({
  username: "MrMax",
  email: "max@gmail.com",
  experience_level: "Senior",
  job_industry: "Space",
  target_job: "Astronaut",
  password: "password1",
  password_confirmation: "password1"
  })

user3 = User.create!({
  username: "TravisK",
  email: "travisk@gmail.com",
  experience_level: "Executive",
  job_industry: "(Formerly) car sharing",
  target_job: "Anything...",
  password: "password1",
  password_confirmation: "password1"
  })

i1 = Interviewer.create!({
  name: "Leigh-Ann",
  email: "leighann@codeclan.com",
  one_line_bio: "CodeClan momma bear",
  industries: "Tech",
  experience_level: "All",
  availability: "Monday-Friday: 6-8am, 6-10pm",
  })

i2 = Interviewer.create!({
  name: "Laszlo Bock",
  email: "lbock@gmail.com",
  one_line_bio: "Head of HR at google",
  industries: "Tech",
  experience_level: "Experienced",
  availability: "Monday-Friday: 6am-3pm"
  })

Appointment.create!({
  time: "27th June 19:00",
  user_id: user1.id,
  interviewer_id: i1.id,
  further_details: "have an upcoming interview with Deloitte so please be as horrible as possible to effectively prepare me"
  })

r1 = Review.create!({
  rating: 5,
  personal_review: "Leigh Ann was helpful and honest while sharing a few brutal truths",
  user_id: user1.id,
  interviewer_id: i1.id
  })

r2 = Review.create!({
  rating: 4,
  personal_review: "Shared some top tips to allow a 2 year old to succeed in business",
  user_id: user2.id,
  interviewer_id: i1.id
  })

r3 = Review.create!({
  rating: 1,
  personal_review: "Only talked about how things worked at some company called 'Google' or something",
  user_id: user2.id,
  interviewer_id: i2.id
  })
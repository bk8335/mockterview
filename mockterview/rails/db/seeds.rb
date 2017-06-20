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

i1 = Interviewer.create!({
  name: "Leigh-Ann",
  email: "leighann@codeclan.com",
  one_line_bio: "CodeClan momma bear",
  industries: "Tech",
  experience_level: "All",
  availability: "Monday: 6-8am, 6-10pm, Tuesday: 6-8am, 5-7pm",
  })

i2 = Interviewer.create!({
  name: "Fat Tony",
  email: "fattony@gmail.com",
  one_line_bio: "Specialise in recruiting people to make problems 'go away' if you know what I mean",
  industries: "Narcotics",
  experience_level: "Junior",
  availability: "Monday: 3-11pm, Tuesday: 4-10pm"
  })

Appointment.create!({
  time: "27th June 19:00",
  user_id: user1.id,
  User_username: user1.username,
  InterviewerName: i1.name,
  interviewer_id: i1.id,
  further_details: "have an upcoming interview with Deloitte so please be as horrible as possible to effectively prepare me"
  })

r1 = Review.create!({
  rating: 5,
  personal_review: "Leigh Ann was helpful and honest while sharing a few brutal truths",
  user_id: user1.id,
  interviewer_id: i1.id
  })
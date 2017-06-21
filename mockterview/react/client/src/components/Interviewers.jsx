import React from 'react'
import { Link, Router } from 'react-router-dom'

class Interviewers extends React.Component {


  constructor(props) {
    super(props)
    this.state = { 
      interviewers: [],
      pics: ['../../images/leighann@codeclan.com.jpg','../../images/fattony@gmail.com.jpg']
    }
  }

  componentDidMount(){
    var url = 'http://localhost:1234/interviewers'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { interviewers: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        this.props.history.goBack()
       }
    }
    request.send(null)
  }

  allReviews(){
    window.location = '/#/reviews/'
  }

  bookAppointment(){
    window.location = '/#/appointments'
  }

  render(){

    let interviewerNodes = []
    this.state.interviewers.forEach((interviewer, index) => {
      interviewerNodes.push(
        <li key={interviewer.id}>

        <h3>Name: {interviewer.name}</h3>
        <img src={this.state.pics[index]} height="20%" width="20%"/>
        <p><strong>Bio:</strong> {interviewer.one_line_bio} </p>
        <p><strong>Industries:</strong> {interviewer.industries}</p>
        <p><strong>Experience Level:</strong> {interviewer.experience_level}</p>
        <p><strong>Availability:</strong> {interviewer.availability}</p>
        <button onClick={this.allReviews}>All Interviewer Reviews</button>
        <button onClick={this.bookAppointment}>Book an interview with {interviewer.name}</button>
      </li>)
    })

    return(
        <div className='interviewers-container'>
          <ul>
            {interviewerNodes}
          </ul>
        </div>
    )
  }

}

export default Interviewers
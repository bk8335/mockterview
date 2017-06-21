var React = require('react')
import { Link, Router } from 'react-router-dom'

class MyInterviews extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      myInterviews: []
    }
    this.deleteAppointment = this.deleteAppointment.bind(this)
  }


  componentDidMount(){
    var url = 'http://localhost:1234/appointments'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { myInterviews: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        this.props.history.goBack()
       }
    }
    request.send(null)
  }

  deleteAppointment(event){
    console.log("deleteAppointment function hit")
    var url = 'http://localhost:1234/appointments/' + event.target.value
    var request = new XMLHttpRequest()
    request.open('DELETE', url)

    request.withCredentials = true

    request.onload = () => {
      var responseObject = JSON.parse(request.responseText)
      if((responseObject).appointment !== false ){
        var deleted_id = responseObject.appointment.id
        const updated_appointments = this.state.myInterviews.filter(function(appointment){
          return appointment.id != deleted_id
        }) 
        this.setState( {myInterviews: updated_appointments})
      }

    }

    request.send(null)

  }

  countdownClock(time){

    // var countdownTimer = setInterval(function(){

      var distanceMs = Date.parse(time) - Date.now() - 1000*60*60

      if (distanceMs < 0) {
          // clearInterval(countdownTimer);
          return "Interview finished"
        }
      else{
        var days = Math.floor(distanceMs / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distanceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distanceMs % (1000 * 60 * 60)) / (1000 * 60));
        return days + " days " + hours + " hours " + minutes + " minutes "
      }

    // }, 1000)
  }

  newReviewPage(){
    window.location = '/#/new_review/'
    // this.props.history.push("/new_review");
  }


  render() {
    let appointmentDetails = []

    this.state.myInterviews.forEach((appointment) => {console.log(appointment)
      appointmentDetails.push(

        <li key={appointment.id}>
          <h3>Interviewer: {appointment.interviewer.name}</h3>
          <p><strong>Date:</strong> {appointment.time.slice(0,10) }</p>
          <p><strong>Time:</strong> {appointment.time.slice(11,16) }</p>
          <p><strong>Time until interview:</strong> {this.countdownClock(appointment.time)} </p>
          <p><strong>Further details:</strong> {appointment.further_details}</p>
          <button onClick={this.deleteAppointment} value={appointment.id}>Cancel Appointment </button>
          <button onClick={this.newReviewPage}>Write Review about {appointment.interviewer.name}</button>
          
        </li>
      )
    })

    // if user_id in review === currentuser.id, then print the review
    // alternatively, should the path be the user/id/my_appointments? How do I do that?

    return(

        <div className='interviewers-container'>
          <ul>
            {appointmentDetails}
          </ul>
        </div>

      )

  }




}

export default MyInterviews
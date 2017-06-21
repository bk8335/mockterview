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

      var distanceMs = Date.parse(time) - Date.now()

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


  render() {
    let appointmentDetails = []
    

    this.state.myInterviews.forEach((appointment) => {console.log(appointment)
      appointmentDetails.push(

        <li key={appointment.id}>
          <h4>Interviewer: {appointment.interviewer.name}</h4>
          <p>Date: {appointment.time.slice(0,10) }</p>
          <p>Time: {appointment.time.slice(12,16) }</p>
          <p>Time until interview: {this.countdownClock(appointment.time)} </p>
          <p>Further details: {appointment.further_details}</p>
          <button onClick={this.deleteAppointment} value={appointment.id}>Cancel Appointment </button>
          <button>Write Review about {appointment.InterviewerName}</button>
        </li>
      )
    })

    // if user_id in review === currentuser.id, then print the review
    // alternatively, should the path be the user/id/my_appointments? How do I do that?

    return(
      <div className="interviewers">
        <nav>
          <Link to='/' className='title'>Mockterview</Link>
        </nav>

        <div className='interviewers-container'>
          <ul>
            {appointmentDetails}
          </ul>
        </div>
      </div>

      )

  }




}

export default MyInterviews
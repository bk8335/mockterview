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


  render() {
    let appointmentDetails = []
    

    this.state.myInterviews.forEach((appointment) => {console.log(appointment)
      appointmentDetails.push(

        <li key={appointment.id}>
          <h4>Interviewer: {appointment.interviewer.name}</h4>
          <p>Time: {appointment.time}</p>
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
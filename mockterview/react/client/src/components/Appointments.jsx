import React from 'react'
import { Link, Router } from 'react-router-dom'

class Appointment extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
        time: Date.now(),
        further_details: "",
        interviewers: [],
        user_id: -2,
        interviewer_id: -1,
      };

      this.handleTimeChange = this.handleTimeChange.bind(this);
      this.handleDetailChange = this.handleDetailChange.bind(this);
      this.selectedInterviewerChanged = this.selectedInterviewerChanged.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleTimeChange(event) {
      this.setState({time: event.target.value});
    }

    handleDetailChange(event) {
      this.setState({further_details: event.target.value})
    }

    selectedInterviewerChanged(event) {
      this.setState({interviewer_id: event.target.value})
    }

    handleSubmit(event) {
      event.preventDefault();
      var url = 'http://localhost:1234/appointments/'
      var request = new XMLHttpRequest()
      request.open('POST', url)
      request.setRequestHeader("Content-Type", "application/json");
      request.withCredentials = true;

      var body = {
        interviewer_id: this.state.interviewer_id,
        time: this.state.time,
        further_details: this.state.further_details,
        user_id: this.state.user_id,
      }

      request.onload = () => {
        this.props.history.push("/my_appointments");
      }

      request.send(JSON.stringify(body))

    }

    componentDidMount() {
      var url = 'http://localhost:1234/interviewers/'
     var request = new XMLHttpRequest()
     request.open('GET', url)
     request.setRequestHeader("Content-Type", "application/json");
     request.withCredentials = true;

     request.onload = () => {
        if(request.status === 200) {
          console.log(request.responseText);
          const interviewers = JSON.parse(request.responseText);

          this.setState({interviewers: interviewers});
        }
     }

     request.send(null)
    }




    render() {

      var interviewers = this.state.interviewers.map((interviewer) => {

        return <option value={interviewer.id}> {interviewer.name} </option>

      });

      return (
        <div className="appointments">
          <h2>Book an Appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Interviewer name:  
            <select onChange={this.selectedInterviewerChanged}>
              <option value="-1">Choose an interviewer</option>
              {interviewers}
            </select>
            <br></br>
          </label>
          <label>
            Interview time: 
            <input type="datetime-local" value={this.state.value} onChange={this.handleTimeChange} />
          </label>
          <br></br>
          <br></br>
          <label>
            Additional details you would like to add? 
            <textarea name="further_details" cols="40" rows="5" value={this.state.value} onChange={this.handleDetailChange}></textarea>
          </label>
          <br></br>

          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }

}

export default Appointment
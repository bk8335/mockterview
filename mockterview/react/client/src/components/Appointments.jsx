import React from 'react'
import { Link, Router } from 'react-router-dom'

class Appointment extends React.Component{

  constructor(props) {
      super(props);
      this.state = {booking_form: [] };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({booking_form: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      var url = 'http://localhost:1234/appointments/'
      var request = new XMLHttpRequest()
      request.open('POST', url)
    }

    render() {

      return (
        <div className="appointments">
          <nav>
            <Link to='/' className='title'>Mockterview</Link>
          </nav>
        <form onSubmit={this.handleSubmit}>
          <label>
            Interviewer name: 
            <select>
              <option value="interviewer_choice">Choose an interviewer</option>
              <option value="batman">Batman</option>
              <option value="superman">Superman</option>
            </select>
            <br></br>
          </label>
          <label>
            Interview time:
            <input type="datetime-local" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <br></br>
          <label>
            Additional details you would like to add?
            <textarea name="jd_detail" cols="40" rows="5"></textarea>
          </label>
          <br></br>

          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }

}

export default Appointment
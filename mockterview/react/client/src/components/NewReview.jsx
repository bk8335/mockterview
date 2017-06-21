import React from 'react'
import { Link, Router } from 'react-router-dom'

class NewReview extends React.Component {

  constructor(props){
    super(props)
    this.state={
      rating: 0,
      personal_review: "",
      interviewers: [],
      user_id: -2,
      interviewer_id: -1,
    }

    this.selectedInterviewerChanged = this.selectedInterviewerChanged.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handlePersonalReviewChange = this.handlePersonalReviewChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  selectedInterviewerChanged(event){
    this.setState({interviewer_id: event.target.value})
  }

  handleRatingChange(event){
    this.setState({rating: event.target.value})
  }

  handlePersonalReviewChange(event){
    this.setState({personal_review: event.target.value})
  }

  handleSubmit(event){

    event.preventDefault();
    var url = 'http://localhost:1234/reviews/'
    var request = new XMLHttpRequest()
    request.open('POST', url)
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    var body = {
      interviewer_id: this.state.interviewer_id,
      rating: this.state.rating,
      personal_review: this.state.personal_review,
      user_id: this.state.user_id,
    }
    console.log(body)
    request.onload = () => {
      this.props.history.push("/reviews");
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
        const interviewers = JSON.parse(request.responseText);

        this.setState({interviewers: interviewers});
      }
   }

   request.send(null)
  }


  render(){

    var interviewers = this.state.interviewers.map((interviewer) => {
      return <option value={interviewer.id}> {interviewer.name} </option>
    });


    return (
      <div className="new-review">
        <nav>
          <Link to='/' className='title'>Mockterview</Link>
        </nav>
      <h1>Review your Mockterview Interviewer</h1>

      <form onSubmit={this.handleSubmit}>
        <label>
          Interviewer name: 
          <select onChange={this.selectedInterviewerChanged}>
            <option value="-1">Choose an interviewer</option>
            {interviewers}
          </select>
          <br></br>
        </label>
        <label> Rating (out of 5)
          <input type="number" value={this.state.value} onChange={this.handleRatingChange}/>
          <br></br>
          <br></br>
        </label>
        <label>
        Would you recommend your interviewer?
        <textarea name="personal_review" cols="40" rows="5" value={this.state.value} onChange={this.handlePersonalReviewChange}>
        </textarea>
        </label>

        <input type="submit" value="Submit" />

      </form>
      </div>
    )
  }

}

export default NewReview
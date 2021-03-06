import React from 'react'
import { Link, Router } from 'react-router-dom'


class Reviews extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    var url = 'http://localhost:1234/reviews'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState( { reviews: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        this.props.history.goBack()
       }
    }
    request.send(null)
  }

  render() {
    let reviewElements = []
    console.log(this.state)
    this.state.reviews.forEach((review) => {
      reviewElements.unshift(
        

        <li key={review.id}>
          <h3>Interviewer: {review.interviewer.name} </h3>
          <h3><strong>Rating:</strong> {review.rating}</h3>
          <p><strong>Review:</strong> {review.personal_review}</p>
          <p><strong>Date:</strong> {review.updated_at.slice(0,10)} </p>
          <p><strong>Submitted by:</strong> {review.user.username} </p>
          <br></br>
        </li>
      )
    })
    

    return(
        <div className = 'review-container'>
          <ul>{reviewElements}</ul>
        </div>
    )
  }


}

export default Reviews
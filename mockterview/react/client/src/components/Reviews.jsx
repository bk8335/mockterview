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
        console.log("request: ", request.responseText)
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
    this.state.reviews.forEach((review) => {
      reviewElements.push(
        <li key={review.id}>
          <h3>Interviewer: {review.interviewer.name} </h3>
          <h2>Rating: {review.rating}</h2>
          <p>Review: {review.personal_review}</p>
          <p>Date: {review.updated_at.slice(0,10)} </p>
          <p>Submitted by: {review.user.username} </p>
        </li>
      )
    })
    

    return(
      <div>
        <Link to='/' className='title'>Mockterview</Link>
        <div className = 'review-container'>
          <ul>{reviewElements}</ul>
        </div>
      </div>
    )
  }


}

export default Reviews
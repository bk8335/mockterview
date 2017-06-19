import React from 'react'
import { Link, Router } from 'react-router-dom'

class Interviewers extends React.Component {


  constructor(props) {
    super(props)
    this.state = { 
      interviewers: [] 
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

  render(){

    let interviewerNodes = []
    this.state.interviewers.forEach((interviewer) => {
      interviewerNodes.push(
        <li key={interviewer.id}>
        <h4>Name: {interviewer.name}</h4>
        <p>Bio: {interviewer.one_line_bio} </p>
        <p>Industries: {interviewer.industries}</p>
        <p>Experience Level: {interviewer.experience_level}</p>
        <p>Availability: {interviewer.availability}</p>
        <Link to='/booking'>Book an interview with {interviewer.name}</Link>
      </li>)
    })

    return(
      <div className="interviewers">
        <nav>
          <Link to='/' className='title'>Mockterview</Link>
        </nav>

        <div className='interviewers-container'>
          <ul>
            {interviewerNodes}
          </ul>
        </div>
      
      </div>
    )
  }

}

export default Interviewers
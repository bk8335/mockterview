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
    return(
      <div className="interviewers">
        <nav>
          <Link to='/' className='title'>Mockterview</Link>
        </nav>

        <div className='interviewers-container'>
          
        </div>
      
      </div>
    )
  }

}

export default Interviewers
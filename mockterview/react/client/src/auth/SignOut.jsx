import React from 'react'
import { Link } from 'react-router-dom'

class SignOut extends React.Component{

  constructor(){
    super()
    this.signOut = this.signOut.bind(this)
  }
  
  signOut(event){
    event.preventDefault();
    const request = new XMLHttpRequest();
    request.open("DELETE", this.props.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      if(request.status === 204) {
        this.props.onSignOut(null);
      }
    }

    request.send();
  }

  render() {
    return (
       <div>
        <button onClick={this.signOut}>Sign Out</button>
        <Link className='interviewers-link' to='/interviewers'>View Interviewers</Link>
      </div>
    )
  }
}

export default SignOut
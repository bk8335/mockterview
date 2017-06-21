import React from 'react';
import SignIn from './SignIn.jsx';
import SignOut from './SignOut.jsx';
import SignUp from './SignUp.jsx';
import MyAccount from '../components/MyAccount.jsx';


class LoginBox extends React.Component {

  constructor(props) {
    super(props)
    this.setUser = this.setUser.bind(this)
    this.state = {
      currentUser: null
    }
  }

  setUser(user){
    this.setState({currentUser:user})
  }

  fetchUser() {
    console.log("fetching the user")
    const request = new XMLHttpRequest()
    request.open("GET", this.props.url + "users.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true

    request.onload = () => {

      if(request.status === 200) {
        console.log("request good")
        const receivedUser = JSON.parse(request.responseText)
        this.setUser(receivedUser)
      }
      else if(request.status === 401){
        this.setUser(null)
      }

    }
    request.send(null)
    }

  componentDidMount(){
    this.fetchUser()
  }

  render () {
      var mainDiv = <div>
        <h4> Sign In </h4>
        <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}></SignIn>
        <h4> Sign Up </h4>
        <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser}></SignUp>
      </div>
      if(this.state.currentUser){
        mainDiv = <div>
          <div id='welcome-back'><p> Welcome back <strong>{this.state.currentUser.username}</strong></p></div>
          <div id="my-account"><MyAccount /></div>
          <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}></SignOut>
        </div>
      }
      return (
        <div>
          { mainDiv }
        </div>
      ) 
    }

}


export default LoginBox
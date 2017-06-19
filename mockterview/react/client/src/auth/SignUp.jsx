import React from 'react'

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.signUp = this.signUp.bind(this)
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this)
    this.handleOnChangePassConf = this.handleOnChangePassConf.bind(this)
    this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this)
    this.handleOnChangeExperienceLevel = this.handleOnChangeExperienceLevel.bind(this)
    this.handleOnChangeJobIndustry = this.handleOnChangeJobIndustry.bind(this)
    this.handleOnChangeTargetJob = this.handleOnChangeTargetJob.bind(this)
    this.state = {
      email:"", 
      password:"",
      username:"",
      experience_level:"",
      job_industry:"",
      target_job:""
    }
  }

  signUp(event){
    event.preventDefault();
    const request = new XMLHttpRequest();
    request.open("POST", this.props.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      if (request.status === 201){
        const user = JSON.parse(request.responseText)
        this.props.onSignUp(user);
      }
    }
    const data = {
      user: {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        username:this.state.username,
        experience_level:this.state.experience_level,
        job_industry:this.state.job_industry,
        target_job:this.state.target_job
      }
    }

    request.send(JSON.stringify(data));
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleOnChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleOnChangePassConf(event) {
    this.setState({password_confirmation: event.target.value})
  }

  handleOnChangeUsername(event) {
    this.setState({username: event.target.value})
  }

  handleOnChangeExperienceLevel(event) {
    this.setState({experience_level: event.target.value})
  }

  handleOnChangeJobIndustry(event) {
    this.setState({job_industry: event.target.value})
  }

  handleOnChangeTargetJob(event) {
    this.setState({target_job: event.target.value})
  }

  
  render() {
    return (
      <form onSubmit={this.signUp} className='login-form'>
        <input type="text" onChange={this.handleOnChangeEmail}  placeholder="Email" />
        <input type="password" onChange={this.handleOnChangePassword}  placeholder="Password" />
        <input type="password" onChange={this.handleOnChangePassConf}  placeholder="Password Confirmation" />
        <input type="text" onChange={this.handleOnChangeUsername}  placeholder="Username" />
        <input type="text" onChange={this.handleOnChangeExperienceLevel}  placeholder="Experience level (intern/grad/junior/mid-level/senior/exec)" />
        <input type="text" onChange={this.handleOnChangeJobIndustry}  placeholder="Desired industry" />
        <input type="text" onChange={this.handleOnChangeTargetJob}  placeholder="Desired job role or description if available" />

        <button onClick={this.signUp}>  Sign Up! </button>
      </form>
    )
  }
}

export default SignUp
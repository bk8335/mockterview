var React = require('react');

class MyAccount extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentUser: []
    }
  }


  componentDidMount(){
    var url = 'http://localhost:1234/users'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { currentUser: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        this.props.history.goBack()
       }
    }
    request.send(null)
  }

  render() {
    
    const user = this.state.currentUser;

    return(
      
      <div className = 'user-container'>
        <ul> 
        <li>
          <h2>My Account details</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username} </p>
          <p><strong>Experience level:</strong> {user.experience_level}</p>
          <p><strong>Job industry:</strong> {user.job_industry}</p>
          <p><strong>Target job:</strong> {user.target_job}</p>
        </li>
        </ul>
        
      </div>
      

    )
  }


}



export default MyAccount
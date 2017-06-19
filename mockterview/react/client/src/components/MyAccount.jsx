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
    // let userDetails = Object.keys(this.state.currentUser).map()

   /* <h2>My Account details</h2>
    <h4>Email: </h4>
    <h4>Username: {user.username} </h4>
    <h4>Experience level: </h4>
    <h4>Job industry: </h4>
    <h4>Target job: </h4>*/

    // this.state.currentUser.forEach((key) => {
    //   return
    //     <li>
   
    //     </li>
    // })
    const user = this.state.currentUser;

    return(
      <div className = 'user-container'>
        <ul> 
        <li>
          <h2>My Account details</h2>
          <h4>Email: {user.email}</h4>
          <h4>Username: {user.username} </h4>
          <h4>Experience level: {user.experience_level}</h4>
          <h4>Job industry: {user.job_industry}</h4>
          <h4>Target job: {user.target_job}</h4>
        </li>
        </ul>
      </div>
    )
  }


}



export default MyAccount
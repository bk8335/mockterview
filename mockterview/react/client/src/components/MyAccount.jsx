var React = require('react');

class MyAccount extends React.Component {

  constructor(props){
    super(props)


  }

  render() {
    console.log(this.props)

    return(
      <div className = "MyAccountDetails">
        <h2>My Account details</h2>
        <h4>Email: </h4>
        <h4>Username: </h4>
        <h4>Experience level: </h4>
        <h4>Job industry: </h4>
        <h4>Target job: </h4>
      </div>
    )
  }


}

export default MyAccount
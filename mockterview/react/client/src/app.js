import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Interviewers from './components/Interviewers.jsx'
import Appointments from './components/Appointments.jsx'
import Reviews from './components/Reviews.jsx'
import MyInterviews from './components/MyInterviews.jsx'
import NewReview from './components/NewReview.jsx'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'


// window.addEventListener('load', () => {
//   const targetDiv = document.getElementById('app');
//   ReactDOM.render(<h1>Welcome to Mockterview</h1>, targetDiv);
// });

class App extends React.Component{

  render(){
    return (
      <HashRouter>
        <div className='container'>
          <Route exact path="/" component={Home} />
          <Route path='/interviewers' component={Interviewers} />
          <Route path='/appointments' component={Appointments} />
          <Route path='/reviews' component={Reviews} />
          <Route path='/my_appointments' component={MyInterviews} />
          <Route path='/new_review' component={NewReview} />
        </div>
      </HashRouter>
    )
  }
}

window.onload = () => {
  const div = document.getElementById('app');
  ReactDOM.render(<App />, div);
}


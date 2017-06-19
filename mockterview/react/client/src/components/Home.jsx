import React from 'react'
import { link } from 'react-router'
import LoginBox from '../auth/LoginBox.jsx'
import Pitch from './Pitch.jsx'

const Home = () => {
  return (<div className = "home">
    <h1 className = 'title'>Mockterview</h1>
    <Pitch />
    <LoginBox url='http://localhost:1234/' />
    

  </div>);
}

export default Home
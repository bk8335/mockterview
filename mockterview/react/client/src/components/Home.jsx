import React from 'react'
import { link } from 'react-router'
import LoginBox from '../auth/LoginBox.jsx'
import Pitch from './Pitch.jsx'

const Home = () => {
  <div className = "home">
    <h1 className = 'title'>Mockterview</h1>
    <LoginBox url='localhost:1234' />
    <Pitch />
  </div>
}

export default Home
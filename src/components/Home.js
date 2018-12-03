import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 /*I created this homepage component to take up the '/' route. Ideally in a
  a full operational App this would serve as a sign-in page*/

class Home extends Component {

  render() {
    return (
      <div>
      <h1 className="Header-title">React Rolodex</h1>
      <div className='jumbotron' id="home-description">
      <p>Hello there! Welcome to the React Rolodex. Please click the "Start" Button to view your contacts!</p>
      <Link to={`/contacts`}><button className="btn btn-success">Start</button></Link> 
      </div>
      </div>
    )
  }
} 
export default Home
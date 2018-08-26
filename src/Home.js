import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
  <div className = "Home" >
    <h2>Welcome to your Rolodex!</h2>
      <Link to = {'/Contacts'}>
        Click to view contacts!
        </Link>
  </div>
)

export default Home

import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Patrick's Contact List</h1>
    
      <button className='btn'>
          <Link to='/contacts/new'>Add Contact</Link></button>
          </div>
   
)

export default Home


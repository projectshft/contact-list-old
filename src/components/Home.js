import { Link } from 'react-router-dom'
import React from 'react';

const Home = () => (
  <div>
    <h1>See Your Contact List</h1>
    <Link to={'/contacts'}>Go to Contacts</Link>
  </div>
)

export default Home
import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
  <div className='card text-center'>
    <div className='card-header'>
      <h1>Contacts <FontAwesomeIcon icon={faAddressBook} size='lg'/></h1>
    </div>
    <div className='card-body'>
      <button className='btn btn-light'><Link to='/contacts'>Go to Contact List</Link></button>
    </div>
  </div>
)

export default Home

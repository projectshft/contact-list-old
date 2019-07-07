import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
//home directs to contact list index, or directly to add a new contact 
const Home = () => (
  <div className='card text-center'>
    <div className='card-header'>
      <h1>Contacts <FontAwesomeIcon icon={faAddressBook} size='lg'/></h1>
    </div>
    <div className='card-body'>
      <button className='btn btn-light'><Link to='/contacts'>View Contact List</Link></button>
    </div>
    <div className='card-body'>
      <button className='btn btn-light'><Link to='/contacts/new'><FontAwesomeIcon icon={faPlusSquare} size='sm'/>  Add a New Contact</Link></button>
    </div>
  </div>
)

export default Home

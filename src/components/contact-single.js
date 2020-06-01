import { Link } from 'react-router-dom';
import React from 'react';

const Contact = (props) => {



  return (
    <div>
      <img src={props.contacts[0].image} alt={props.contacts[0].name}/>
      <div className='individual'>
        <h1>{props.contacts[0].name}</h1>
        <h2>Email:</h2>
        <p>{props.contacts[0].email}</p>
        <h2>Phone Number:</h2>
        <p>{props.contacts[0].phone}</p>
        <Link to='/contacts'>Back</Link>
      </div>
    </div>
  )
}

export default Contact

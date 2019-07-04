import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import blank_contact from '../blank_profile_male.jpg';

const ContactList = ({contacts}) => (
  <div className='col-md-8 offset-md-2'>
    <div className="jumbotron"><h1>Rolodex</h1></div>
    <div className='contacts-info'>
      <span><h1><em>Total Contacts: {contacts.length}</em></h1></span>
      <Link className='btn btn-secondary btn-lg btn-block align-right' to={`/contacts/new`}>Add Contact</Link>
    </div>
    

    <ul className='list-group'>
      {
        contacts.map(c => (
          <li key={c.id} className='list-group-item'>
            <img className="float-left" src={c.image_url === '' ? blank_contact: c.image_url}></img>
            <Link to={`/contacts/${c.id}`}>{c.name}</Link> <Link className='btn btn-outline-info btn-md float-right aligh-middle' to={`/contacts/${c.id}/edit`}>Edit</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default ContactList
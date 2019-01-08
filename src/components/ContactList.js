import React from 'react';
import { Link, Route }  from 'react-router-dom';
import ContactPage from './ContactPage';
import Home from "./Home";

const ContactList = ({contacts, match}) => {
  console.log(contacts)
return (
    <div>
      <Link to="/AddContact">Add Contact</Link>
      <ul style={{listStyle: 'none', margin: '1em auto', padding: '1.5em'}}>
        {contacts.map(contact => (
          <Link to={`/contacts/${contact.id}`} key={contact.id}><li>{contact.name}</li></Link>
        ))}
      </ul> 
      <Link to={'/'}>Back to Home</Link>     
    </div>
  )
        }

export default ContactList

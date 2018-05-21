import React from 'react';
import {Link} from 'react-router-dom';
import { getAll, getNextId } from '../state';
import Contact from './contact';

const ContactsList = () => {
  // Get all contacts from state.js
  const contacts = getAll();

  return (
    <div>
      <h1>Contacts</h1>
      <Link to={`/contacts/${getNextId()}`}>
        <button className="add-contact btn btn-primary">Add Contact</button>
      </Link>
      <ul className="contacts-list">
        {contacts.map((contact, index) => <Contact key={index} contact={contact}/>)}
      </ul>
    </div>);
};

export default ContactsList;

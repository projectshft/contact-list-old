import { Link } from 'react-router-dom';
import React from 'react';
import ContactsList from './contacts-list';

const Home = (props) => {
  return (
    <div>
      <header>
        <h1>Contacts</h1>
        <Link to={`/contacts/${props.state.contacts.length + 1}`}>Add Contact</Link>
        <hr/>
      </header>
      <div>
        <ContactsList contacts={props.state.all()} />
      </div>
    </div>
  )
}

export default Home;

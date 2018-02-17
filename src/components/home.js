import { Link } from 'react-router-dom';
import React from 'react';
import ContactsList from './contacts-list';

// Home page view with list of contacts
const Home = (props) => {
  return (
    <div>
      <header>
        <div className="row justify-content-center">
          <h1>Contacts</h1>
        </div>
        <div className="row justify-content-center">
          <Link className="btn btn-primary add-contacts" to='/contact/new'>Add Contact</Link>
        </div>
        <hr/>
      </header>
      <div>
        <ContactsList contacts={props.state.all()} removeContact={props.removeContact} />
      </div>
    </div>
  )
}

export default Home;

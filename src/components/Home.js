import { Link } from 'react-router-dom';
import React from 'react';
import ContactsList from './ContactList';

//This is the home page where the contactlist is
const Home = (props) => {
  return (
    <div>
      <header>
        <div className="row justify-content-center">
          <h1>Contacts</h1>
        </div>
        {/*button in home page for adding contact*/}
        <div className="row justify-content-center">
          <Link className="btn btn-primary add-contacts" to='/contact/new'>Add Contact</Link>
        </div>
        <hr/>
      </header>
      <div>
        {/*this is pulling fromm the contactlist */}
        <ContactsList contacts={props.state.all()} removeContact={props.removeContact} />
      </div>
    </div>
  )
}

export default Home

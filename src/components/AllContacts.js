import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact.js';



class AllContacts extends React.Component {
  render () {
 console.log(this.props.contacts)
    return (
      <div className="contacts">
      
      {/* This is the title of your list of Contact links. */}
      <h1>Contacts </h1>
      {/* This Button takes you to a new page that has a form that enables you to fill out a form for a new contact. */}
      <Link to="/contact/new"><button>Add Contact</button></Link>
   
     
      <ul>
        {
       //This displays a list of contacts and the link identifier is the contact's name.   
          this.props.contacts.map(p => (
            <li key={p.name}>
              <Link to={`/contact/${p.id}`}>{p.name}</Link>
              
            </li>
            
          ))
        }
      </ul>
    
      </div>
    );
  }
}

AllContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(Contact.propTypes)).isRequired
};


export default AllContacts;



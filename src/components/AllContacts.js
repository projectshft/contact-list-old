import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact.js';



class AllContacts extends React.Component {
  render () {
 
    return (
      <div className="contacts">
        
      <h1>Contacts </h1><Link to="/contact/new"><button>Add Contact</button></Link>
   
     
      <ul>
        {
          
          this.props.contacts.map(p => (
            <li key={p.name}>
              <Link to={`/contact/${p.phone_number}`}>{p.name}</Link>
              
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



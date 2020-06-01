import { Link } from 'react-router-dom';
import React from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';



/*  this component will render the list of contacts that is stored in our state (in
   App). We'll iterate through our contacts (props) and create a list of contacts
   that links to a contact info page if the contact is clicked. A key will be
   assigned to each list item to help React with identification between re-renders.
   The Link tag assigns the route based on the id of the contact. We will use
   destructuring for the props to avoid using {props.contacts}  */
const ContactsList = ({contacts}) => (
      <div>
        <div className="row heading">
          <div className="col-md-3 offset-md-1">
            <h1>My Contacts</h1>
          </div>
          <div className="col-md-2 button-div">
            <button><Link to="/contact/new" className="link">Add Contact</Link></button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <ul>
              {contacts.map(contact => (
                <li key={contact.id}>
                  <p className="contact-p"><Link to={`/contact/${contact.id}`} className="link">{contact.name}</Link></p>
                  <p className="edit-link"><Link to={`/contact/${contact.id}/edit`}>Edit</Link></p>
                  <p className="link"><Link>Delete</Link></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )

//we want to validate that our incoming props (the contacts array) is an array of objects
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContactsList
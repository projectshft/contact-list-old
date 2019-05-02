import React from 'react';
import Contact from './ContactItem';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

//contact list to render contact items
const ContactList = ({ contacts }) => (

    <div>
        <header style={{ margin: 'auto', padding: "1em" }}>
            <h3>Carson's Contacts</h3>
            //add contact button
            <Link to="/new">
              <Button color="primary">Add Contact </Button>
            </Link>
        </header>
        <ul>
            {contacts.map((contact) =>
                <li key={contact.id}>
                  <h4>
                    <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
                  </h4>
                </li>
                )
            }
        </ul>
    </div>

)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(Contact.propTypes)).isRequired
};


export default ContactList;

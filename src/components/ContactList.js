import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const ContactList = ({ contacts }) => (

    <div>
        <header>
            <h2>Contact List</h2>
            <Link to="/new"> <Button color="primary">New Contact </Button> </Link>
        </header>
        <ul>
            {contacts.map((contact) =>
                <li key={contact.id}>
                    <h5>
                        <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
                    </h5>
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

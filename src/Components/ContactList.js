
import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

//RENDERS LIST OF CONTACTS

const ContactList = ({ contacts }) => (
    
    <div>
        <header style={{ margin: '1em auto', padding: "1em" }}>
            <h3>Contact List</h3>
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
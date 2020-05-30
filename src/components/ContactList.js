import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

// list of contacts shown on home page
const ContactList = (props) => {

    // display each contact name and link to view contact details, with links also to edit and delete
    const listedContacts = props.contacts.map((contact, index) => {
        return (
            <div key={index} className="contact">
                <Link to={`/contacts/${contact.id}`} className="contact-link">{contact.name} </Link>
                <Link to="" className="edit-link"> edit</Link>
                <Link to="" className="delete-link"> delete</Link>
            </div>
        )
    });

    return (
        <div id="contact-list">

            <h2>Contact List</h2>

            {listedContacts}

        </div>
    )
}

//set prop types
ContactList.propTypes = {contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string
}))}

export default ContactList;
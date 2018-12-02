import React from 'react';
import ContactListItem from '../Components/ContactListItem';

var uniqid = require('uniqid');
var id = uniqid.process();

const ContactList = (props) => {
    const contactItems = props.contacts.map(function (contact) {
        return (
            <ContactListItem key={id} contact={contact} />
        );

    })


    return (
        <ul>
            {contactItems}
        </ul>

    )
}


export default ContactList
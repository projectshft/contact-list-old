import React from 'react';

const ContactListItem = ({contact}) => {
    return (
        <li>
            <span>{contact.name}</span>
        </li>
    )
}

export default ContactListItem

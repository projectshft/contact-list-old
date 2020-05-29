import React from 'react';
import ContactDetail from './ContactDetail';
import { Link } from 'react-router-dom';

// list of contacts shown on home page
const ContactList = (props) => {

    return(
        <h1>Contact list</h1>
    )

    // // take all contacts and display each name as link to view details, with links also to edit and delete
    // const listedContacts = props.contacts.map(contact => {
    //     return (
    //         <div className="contact">
    //             <Link className="contact-link" to="/contacts/{contact.id}">{contact.name}</Link>
    //             <Link className="edit-link">edit</Link>
    //             <Link className="delete-link">delete</Link>
    //         </div>
    //     )
    // });

    // return (
    //     <div id="contact-list">
    //         {listedContacts}
    //     </div>
    // )
}

export default ContactList;
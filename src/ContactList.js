
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//This shows all contacts in a list on the main page 

const ContactList = (props) => {
    return (
        <div className="contact-list">
            <ul className="list-group">
                {props.contacts.map(function (contact) {
                    return (
                        <Link to={`/contacts/${contact.id}`} key={contact.id} className="list-group-item">{contact.name}<a id="delete" href="#">Delete</a><a id="edit" href="#">Edit-</a></Link>
                    )
                })}
            </ul>
        </div>
    )
};



export default ContactList



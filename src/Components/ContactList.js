import { Route, Link } from 'react-router-dom';
import React from 'react';
import ContactForm from './ContactForm';
import ContactListItem from './ContactListItem';
import App from './App';


var uniqid = require('uniqid');
var id = uniqid.process();

const ContactList = ({ contacts, addContact}) => {
    return (
        //map through contacts and construct a unique id for each

        <div>
            <ul>
                {contacts.map(contact => (
                    <li key={id}>
                        <Link to="/contacts/:id">
                            {contact.name}
                        </Link>
                    </li>
                ))
                }
            </ul>

            <Route path="/contacts/form" render={() => (<ContactForm  addContact={addContact} contacts={contacts} />)} />


            <Route path="/contacts/:id" render={() => (<ContactListItem  key={id} contacts={contacts} />)} />
        </div>
    )

}


export default ContactList
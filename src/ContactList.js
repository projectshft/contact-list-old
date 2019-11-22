
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AddContact from './AddContact';
import NewContact from './IndividualContact'

//Function that shows all items or contacts in state object

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



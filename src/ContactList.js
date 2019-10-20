import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AddContact from './AddContact';
import NewContact from './IndividualContact'


const ContactList = (props) => {
    return (
            <div className="contact-list">
                <ul className="list-group">
                        {props.contacts.map(contact => {
                        return (
                            <li key={contact.id} className="list-group-item">{contact.name} {contact.number}<a id="delete" href="http://www.google.com">Delete</a><a id="edit" href="http://www.google.com">Edit-</a></li>
                        )
                    })}
                </ul>
            </div>
    )
};            
        
    

export default ContactList
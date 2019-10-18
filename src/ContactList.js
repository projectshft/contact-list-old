import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AddContact from './Addcontact';
import NewContact from './Newcontact'


const ContactList = (props) => {

    return (
                <div className="contact-list">
                    <ul className="list-group">
                        {props.contacts.map(contact => {
                            return (
                            <li key={contact.id} href="" className="list-group-item">{contact.name} {contact.number} </li>
                            )
                        })}
                    </ul>
                </div>
    )
};            
        
    

export default ContactList
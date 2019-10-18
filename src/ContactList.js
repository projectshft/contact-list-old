import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Addcontact from './Addcontact';


const ContactList = (props) => {
        const contactItems = props.contacts.map((contact, index) => {
            return (

                <div>
                    <div>
                        <div className="contact-list">
                            <ul className="list-group">
                                <li href=""className="list-group-item">{this.props.contactList}</li>
                            </ul>
                        </div>
                    </div>
                <hr />
             </div>
        )
       
    })
    
};            
        
    

export default ContactList
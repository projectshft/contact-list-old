import '../ContactList.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Contact from './Contact';

//routing for Contact and Contact Form will be handled here so import those
import { Link } from 'react-router-dom';

//pass in props from App.js, render individual contact components with unique key
const ContactList=({contacts})=>(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className='display-4'>Contacts</h1>
          <table className='table table-hover'>
            <tbody>
            {contacts.map(contact => (
              <Contact key={contact.id} contact={contact}/>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <button className='btn btn-light' id="add-contact-button">
            <Link to='/contacts/new'>Add Contact</Link></button>
        </div>
      </div>
    </div>
  )

export default ContactList;

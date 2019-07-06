import '../ContactList.css';
import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import App from './App';
//routing for Contact and Contact Form will be handled here so import those
import Contact from './Contact';
import Contact_Form from './Contact_Form';

//pass in props from App.js
const ContactList=({contacts})=>(

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className='display-4'>Contacts</h1>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
            {
              contacts.map(contact => (
                <tr key={contact.id}>
                  <td><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
                </tr>

              ))
            }
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <button className='btn btn-light' id="add-contact-button">Add Contact</button>
          </div>
          </div>
          <div>

          </div>
      </div>



  )

export default ContactList;

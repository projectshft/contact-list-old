import '../ContactList.css';
import { Swtich, Route } from 'react-router-dom';
import React, { Component } from 'react';
//routing for Contact and Contact Form will be handled here so import those
import Contact from './Contact';
import Contact_Form from './Contact_Form';

//stateful component, will hold state as a contact list array of contact objects
class ContactList extends Component {
  constructor(){
    super()

    this.state = {
      contacts: [
      {"id": 70219577,
      "name": "Albert Einstein",
      "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      "email": "aeinstein@example.com",
      "phone_number": "15555555555"},

      {"id": 70219578,
      "name": "Kate Kremer",
      "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      "email": "kkremer@example.com",
      "phone_number": "15555555556"},

      ]
    }
  }

  //addContact function will be how state is passed from Contact Form


render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className='display-4'>Contacts</h1>
          <table class='table table-hover'>
            <thead>
              <tr>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
            {
              this.state.contacts.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
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
        </div>

  )
}

}

export default ContactList;

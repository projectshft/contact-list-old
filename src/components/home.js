import { Link } from 'react-router-dom';
import React from 'react';
import { sendEvent, queryState } from '../state';

const Home = (props) => {
    const contactsList = queryState("getContacts");

    // Sorts the fullList according to 1st letter of the name.
    contactsList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    // Delete function
    const deleteContact = (contact) => {
      if (window.confirm(`Delete ${contact.name}?`)) {
          sendEvent("deleteContact", contact);
        }
    }

    // Wanted to match the delete button, didn't use Link
    const editContact = (id) =>{
      props.history.push(`/edit/${id}`)
    }

    return(
      <div className="list-container">
        <ul>
          {
            contactsList.map(contact => (
            <li key={contact.id}>
              <div className="row justify-content-center">
                <div className="col-6">
                  <Link to={`/${contact.id}`}>{contact.name}</Link>
                </div>
                <div className="col-2">
                  <button type="button" className="normal-button" onClick={() => {editContact(contact.id)}}>Edit Contact</button>
                </div>
                <div className="col-2">
                  <button type="button" className="normal-button" onClick={() => {deleteContact(contact)}}>Delete</button>
                </div>
              </div>
              <hr/>
            </li>))
          }
        </ul>
      </div>
  )}


export default Home

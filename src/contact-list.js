import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = (props) => {

//create DOM node for each contact
  const contactListItems = props.contacts.map( (contact) => {
    return (
      <div key={contact.id} className="row m-2 mh-100 text-right">
        <div className="col-lg-6 bg-light rounded text-left text-truncate">
          {contact.name}
        </div>
        <div className="col-lg-2 bg-light rounded">
        <Link to={`${contact.id}`}> <button className="btn btn-sm btn-info m-1">edit</button></Link>
        <button className="btn btn-sm btn-danger m-1" onClick={() => props.handleDelete(contact)}>delete</button>
        </div>
      </div>
      )
    });

//render page with contact list
  return (
    <div className="container m-2">
      <div className="row">
        <div className="col-md-8">
          <header className="mt-2 mb-4">
            <h1 className="m-3 d-inline">Contacts</h1>
            <Link to="/add"><button className="btn btn-secondary m-1 align-top float-right">Add Contact</button></Link>
          </header>
        </div>
      </div>
      {contactListItems}
    </div>
  )
}

export default ContactList;

import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = (props) => {

  const contactListItems = props.contacts.map( (contact) => {
    return (
      <div key={contact.id} className="row m-2 mh-100 text-right">
        <div className="col-lg-6 bg-light rounded text-left text-truncate">
          {contact.name}
        </div>
        <div className="col-lg-2 bg-light rounded">
        <Link to={`${contact.id}`}> <button className="btn btn-sm btn-info m-1">edit</button></Link>
        <button className="btn btn-sm btn-danger m-1" onClick={() => props.deleteContact(contact)}>delete</button>
        </div>
      </div>
      )
    });

  return (
    <div className="container m-2">
      <div className="row">
        <div className="col-md-8">
          <header className="mt-2 mb-2">
            <h1 className="m-3 d-inline">Contacts</h1>
            <Link to="/add"><button className="btn btn-secondary m-1 align-top float-right">Add Contact</button></Link>
          </header>
      </div>
    </div>
    <div className="row m-2">
      <div className="col-md-3 offset-3">

      </div>
    </div>

        {contactListItems}

    </div>
  )
}

export default ContactList;

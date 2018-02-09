import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ContactList = (props) => {

  const contactListItems = props.contacts.map( (contact) => {
    let id = Math.round(Math.random() * 10000);
    return (
      <div key={id} className="row m-2">
        <div className="col-md-2 text-right">
          <h3>{contact.name}</h3>
        </div>
        <div className="col-md-2">
        {/* buttons pass id back up to the event handler functions. the magic of scope!! */}
        <Link to={`/contacts/${id}`} contact={contact}> <button className="btn btn-sm btn-info m-1 edit" >edit</button></Link>
        <button className="btn btn-sm btn-danger m-1 delete" onClick={() => props.handleDelete(id)}>delete</button>
        </div>
      </div>
      )
    });

  //clicking on Edit should switch name to contact view

  return (

    <div>
      {contactListItems}
    </div>

  )
}

export default ContactList;

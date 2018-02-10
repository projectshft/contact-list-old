import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ContactList = (props) => {

  componentDidMount = () => {
    console.log('mounted')
    console.log(this.state.contacts)
  }

  const contactListItems = props.contacts.map( (contact) => {
    return (
      <div key={contact.id} className="row m-2">
        <div className="col-md-2 text-right">
          <h3>{contact.name}</h3>
        </div>
        <div className="col-md-2">
        {/* buttons pass id back up to the event handler functions. the magic of scope!! */}
        <Link to={`/contacts/${contact.id}`}> <button className="btn btn-sm btn-info m-1 edit" >edit</button></Link>
        <button className="btn btn-sm btn-danger m-1 delete" onClick={() => props.handleDelete(contact.id)}>delete</button>
        </div>
      </div>
      )
    });

  //clicking on Edit should switch name to contact view

  return (

    <div>
      <a href="/add"><button className="btn btn-primary">Add Contact</button></a>
      {contactListItems}
    </div>

  )
}

export default ContactList;

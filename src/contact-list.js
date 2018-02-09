import React from 'react';

const ContactList = (props) => {

  const contactListItems = props.contacts.map( (contact) => {

    return (
      <div className="row m-2">
        <div className="col-md-2 text-right">
          <h3>{contact.name}</h3>
        </div>
        <div className="col-md-2">
          <button className="btn btn-sm btn-info m-1 edit">edit</button>
          <button className="btn btn-sm btn-danger m-1 delete">delete</button>
        </div>
      </div>
      )
    });

  //clicking on Edit should switch name to contact view

  return (
    <div>{contactListItems}</div>
  )
}

export default ContactList;

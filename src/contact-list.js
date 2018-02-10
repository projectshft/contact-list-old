import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const ContactList = (props) => {
  //
  // const handleAdd = () => {
  //   //returns default values and a unique ID for new contact
  //   return {
  //       id: this.generateId(),
  //       name: 'Q. Dogs',
  //       imageUrl: 'https://i.pinimg.com/736x/97/27/a5/9727a533b8d35ec176155e92fd643477--pet-tattoos-wall-tattoo.jpg',
  //       email: 'qdogs@example.com',
  //       phoneNumber: '123-456-7890'
  //     }
  //   }
  //   //helper function to generate unique ID for each contact
  //
  //   const generateId = () => {
  //     //when generating pseudorandom ID, check to make sure it is unique. regenerate if it isn't.
  //     let id = Math.round(Math.random() * 10000);
  //     //condition returns true only if another contact has the same id
  //     let idIsDuplicate = this.state.contacts.find((contact) => {return contact.id === id})
  //
  //     while (idIsDuplicate) {
  //       id = Math.round(Math.random() * 10000);
  //     }
  //     return id;
  //   }

  const contactListItems = props.contacts.map( (contact) => {
    return (
      <div key={contact.id} className="row m-2">
        <div className="col-md-2 text-right">
          <h3>{contact.name}</h3>
        </div>
        <div className="col-md-2">
        <Link to={`${contact.id}`}> <button className="btn btn-sm btn-info m-1 edit" >edit</button></Link>
        <button className="btn btn-sm btn-danger m-1 delete" onClick={() => props.handleDelete(contact.id)}>delete</button>
        </div>
      </div>
      )
    });

  //clicking on Edit should switch name to contact view

  return (

    <div>
      <Link to="/add"><button className="btn btn-primary" onClick={this.handleAdd}>Add Contact</button></Link>
      {contactListItems}
    </div>

  )
}

export default ContactList;

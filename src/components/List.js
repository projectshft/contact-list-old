import React, { Component } from "react";
import { Switch, Route } from "react-dom";
import ContactItem from './contactItem'

//This is the stateless function that will render the list of contacts and the links to the info/edit pages
const List = ({contacts}) => {
 
  const contactList = contacts.map(person => (
    <ContactItem key={contacts.key} contact={person} />
  ))
  //take in the destructured array and map over each contact, generating JSX
 


  return (
    <div className="contact-list">
      {contactList}
    </div>
  )

}

export default List
import React, { Component } from "react";
import { Switch, Route } from "react-dom";
import ContactList from './contact-list'

//This is the stateless function that will render the list of contacts and the links to the info/edit pages

const List = ({contacts}) => {
  console.log(contacts)

  return <div>
      <ContactList contacts={contacts} />
    </div>;
}

export default List


import { Switch, Route } from "react-router-dom"
import React from "react"
import ContactPage from "./ContactPage"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

const Contact = ({contacts, addContact, AddContact}) => (
  <Switch>
    <Route path='/AddContact' render={(props) => (
      <AddContact props={props} contacts={contacts} addContact={addContact} />
    )}/>

    <Route path='/ContactPage/:name' render={(props) => (
      <ContactPage props={props} contacts={contacts} />
    )}/>

    <Route path='/ContactList' render={() => (
      <ContactList contacts={contacts} />
    )}/>
  </Switch>
)

export default Contact
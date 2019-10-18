import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import ContactForm from "./contact-form";
import ContactList from "./contact-list";
import Contact from "./contact";

const Main = ({ contacts, addContact, deleteContact, editContact }) => {
  return (
    <main>
      <Switch>
        <Redirect exact from="/" to="/contacts" />
        {/* /contacts/new first since regular /contacts causes a match to contacts/new */}
        <Route
          path="/contacts/new"
          render={props => (
            <ContactForm props={props} addContact={addContact} />
          )}
        />
        {/* reuse contact form here since most of it is the same layout as the add form */}
        <Route
          path="/contacts/:id/edit"
          render={props => (
            <ContactForm
              props={props}
              contacts={contacts}
              editContact={editContact}
            />
          )}
        />
        <Route
          path="/contacts/:id"
          render={props => <Contact props={props} contacts={contacts} />}
        />
        <Route
          path="/contacts"
          render={() => (
            <ContactList contacts={contacts} deleteContact={deleteContact} />
          )}
        />
      </Switch>
    </main>
  );
};

export default Main;

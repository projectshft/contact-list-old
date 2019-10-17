import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import ContactAddForm from "./contact-add-form";
import ContactList from "./contact-list";
import Contact from "./contact";

const Main = ({ contacts, addContact }) => {
  return (
    <main>
      <Switch>
        <Redirect exact from="/" to="/contacts" />
        {/* /contacts/add first since regular /contacts causes a match to contacts/add */}
        <Route
          path="/contacts/add"
          render={props => (
            <ContactAddForm props={props} addContact={addContact} />
          )}
        />
        <Route
          path="/contacts/:id"
          render={props => <Contact props={props} contacts={contacts} />}
        />
        <Route
          path="/contacts"
          render={() => <ContactList contacts={contacts} />}
        />
      </Switch>
    </main>
  );
};

export default Main;

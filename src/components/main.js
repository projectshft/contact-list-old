import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import ContactAddForm from "./contact-add-form";
import ContactList from "./contact-list";

const Main = props => {
  console.log(props);
  return (
    <main>
      <Switch>
        <Redirect exact from="/" to="/contacts" />
        {/* /contacts/add first since regular /contacts causes a match to contacts/add */}
        <Route path="/contacts/add" component={ContactAddForm} />
        <Route
          path="/contacts"
          render={() => <ContactList contacts={props.contacts} />}
        />
      </Switch>
    </main>
  );
};

export default Main;

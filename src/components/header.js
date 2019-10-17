import { Route, Link } from "react-router-dom";
import React from "react";

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Contact List</h1>
    {/* Only show the Add Contacts button if on the contacts list page, eventually this will be add or back */}
    <Route
      exact
      path="/contacts"
      render={() => {
        return <Link to="/contacts/add">Add Contact</Link>;
      }}
    />
  </header>
);

export default Header;

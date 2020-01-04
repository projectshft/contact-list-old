import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ContactList from "./contactlist";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact by ID</h1>
        <ContactList contact={contact} />
        <Link to={`/`}>
          <button>Back to Contact List</button>
        </Link>
      </div>
    );
  }
}

export default Contact;

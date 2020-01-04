import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Contact from "./contact";
import ContactList from "./contactlist";
import ContactDetail from "./ContactDetail";
import ContactListItem from "./contactlistitem";

class Home extends React.Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <h1>Contact List</h1>
        <Contact />

        <Link to={`/contacts/new`}>
          <button>Add New Contact</button>
        </Link>
      </div>
    );
  }
}

export default Home;

import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import NewContact from "./new";
import Home from "./home";
import ContactList from "./contactlist";
import Contact from "./contact";

class ContactListItem extends React.Component {
  render() {
    const { contact } = this.props;

    return (
      <div>
        <div>{contact.name}</div>
        <div>
          <Link to={`/contacts/${contact.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

ContactListItem.propTypes = {};

export default ContactListItem;

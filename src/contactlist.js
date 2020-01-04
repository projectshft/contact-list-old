import React from "react";
import ContactListItem from "./contactlistitem";

class ContactList extends React.Component {
  render() {
    const { contacts } = this.props;
    const contactListItems = contacts.map(contact => {
      return (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      );
    });
    return (
      <div>
        <ul>{contactListItems}</ul>
      </div>
    );
  }
}

export default ContactList;

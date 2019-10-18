import React from "react";
import ContactListItem from "./contact-list-item";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(c => (
          <ContactListItem
            key={c.id}
            contactData={c}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

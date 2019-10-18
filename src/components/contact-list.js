import React from "react";
import ContactListItem from "./contact-list-item";

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
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

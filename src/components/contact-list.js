import React from "react";
import ContactListItem from "./contact-list-item";

const ContactList = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.contacts.map(c => (
          <ContactListItem key={c.id} contactData={c} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

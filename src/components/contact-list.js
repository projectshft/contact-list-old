import React from "react";
import Contact from "./contact";

const ContactList = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.contacts.map(c => (
          <Contact key={c.id} contactData={c} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

import React from "react";

const ContactListItem = props => {
  return (
    <li>
      <span>
        {props.contactData.name} - {props.contactData.email}
      </span>
      <hr />
    </li>
  );
};

export default ContactListItem;

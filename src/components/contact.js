import React from "react";

const Contact = props => {
  return (
    <li>
      <span>
        {props.contactData.name} - {props.contactData.email}
      </span>
      <hr />
    </li>
  );
};

export default Contact;

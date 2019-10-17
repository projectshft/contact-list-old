import React from "react";
import { Link } from "react-router-dom";

const ContactListItem = props => {
  //grab the id from the contact data and prep it as the
  //link destiation which is a different route defined in main.js
  const linkDest = `/contacts/${props.contactData.id}`;

  return (
    <li>
      <span>
        <Link to={linkDest}>{props.contactData.name}</Link>
      </span>
      <hr />
    </li>
  );
};

export default ContactListItem;

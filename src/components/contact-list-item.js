import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const ContactListItem = ({ contactData, deleteContact }) => {
  const contactId = contactData.id;
  //grab the id from the contact data and prep it as the
  //link destiation which is a different route defined in main.js
  const linkDest = `/contacts/${contactId}`;

  return (
    <li>
      <span>
        {/* I'm not 100% sure how to actually get these to space apart since I think it's JSX
          allowing white space in the return? so I added this {" "} that keeps pasting weirdly
          and it spaced them properly*/}
        <Link to={linkDest}>{contactData.name}</Link>{" "}
        {/* pass contactId from above to arrow function on click to keep this component functional */}
        <button type="button" onClick={() => deleteContact(contactId)}>
          Delete
        </button>
      </span>
      <hr />
    </li>
  );
};

export default ContactListItem;

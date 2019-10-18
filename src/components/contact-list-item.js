import React from "react";
import { Link } from "react-router-dom";

const ContactListItem = ({ contactData, deleteContact }) => {
  const contactId = contactData.id;
  //grab the id from the contact data and prep it as the
  //link destiation which is a different route defined in main.js
  const contactDest = `/contacts/${contactId}`;
  //link destiation which is a different route defined in main.js
  const editDest = `/contacts/${contactId}/edit`;

  return (
    <li>
      <span>
        {/* I'm not 100% sure how to actually get these to space apart since I think it's JSX
          allowing white space in the return? so I added this {" "} that keeps pasting weirdly
          and it spaced them properly*/}
        <Link to={contactDest}>{contactData.name}</Link>{" "}
        <Link to={editDest}>Edit</Link>{" "}
        {/* pass contactId from above to arrow function on click to keep this component functional */}
        <a
          href="#0"
          type="button"
          onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete ${contactData.name}?`
              )
            )
              deleteContact(contactId);
          }}
        >
          Delete
        </a>
      </span>
    </li>
  );
};

export default ContactListItem;

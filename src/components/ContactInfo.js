import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const ContactInfo = (props) => {
  const contact = _.find(props.contacts, { id: props.contactId });

  console.log("The passed contactId is ", props.contactId);
  console.log("The passed contacts are", props.contacts);
  console.log("The matching contact is ", contact);

  if (!contact) {
    return <div>Sorry, but the player was not found</div>;
  }

  return (
    <div>
      <h1>{contact.name}</h1>

      <h2>{contact.email}</h2>
      <h2>{contact.phone_number}</h2>
      <img src={contact.image_url} />

      <Link to="/contacts">Back</Link>
    </div>
  );
};

export default ContactInfo;

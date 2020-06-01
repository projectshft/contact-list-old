import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ContactInfo = ({ contacts, contactId }) => {
  const contact = _.find(contacts, { id: contactId });

  console.log("The passed contactId is ", contactId);
  console.log("The passed contacts are", contacts);
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

ContactInfo.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
    })
  ),
  contactId: PropTypes.number.isRequired,
};

export default ContactInfo;

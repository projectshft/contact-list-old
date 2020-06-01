import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//styling
import Button from "react-bootstrap/Button";

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
      <div id="individual-contact-info">
        <h1>{contact.name}</h1>
        <h2>{contact.email}</h2>
        <h2>{contact.phoneNumber}</h2>
        <img className="contact-pic" src={contact.imageURL} />
      </div>

      <Link to="/contacts">
        <Button variant="outline-dark" size="sm" type="button">
          Back
        </Button>
      </Link>
    </div>
  );
};

ContactInfo.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    })
  ),
  contactId: PropTypes.number.isRequired,
};

export default ContactInfo;

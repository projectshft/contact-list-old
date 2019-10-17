import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const Contact = ({ props, contacts }) => {
  //url contains id from contact object, use that to grab viewed contact
  const contact = _.find(contacts, {
    id: parseInt(props.match.params.id, 10)
  });

  return (
    <div>
      Name: {contact.name}
      <br />
      Email: {contact.email}
      <br />
      Phone: {contact.phone_number}
      <br />
      <Link to="/contacts">Back</Link>
    </div>
  );
};

export default Contact;

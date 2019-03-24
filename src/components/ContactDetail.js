import React from "react";
import { Link } from "react-router-dom";

const ContactDetails = ({ props, contacts }) => {
  const pickedContact = contacts.find(x => x.id == props.match.params.id); //compares matched id with contacts id's to find the clicked one
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1>Contact Details</h1>
          <ul className="list-group">
          {pickedContact.name !== null ? <li>Name: {pickedContact.name}</li> : <li>Name: N/A</li>}
          {pickedContact.email !== null ? <li>Email: {pickedContact.email}</li> : <li>Email: N/A</li>}
          {pickedContact.phone_number !== null ? <li>Phone Number: {pickedContact.phone_number}</li> : <li>Phone Number: N/A</li>}
          </ul>
          {pickedContact.image_url !== null ? <img src={pickedContact.image_url}/> : <div></div>}
        </div>
      </div>
      <Link to="/Contacts">Back</Link>
    </div>
  );
};

export default ContactDetails;

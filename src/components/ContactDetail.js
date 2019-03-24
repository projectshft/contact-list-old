import React from "react";
import { Link } from "react-router-dom";
import personplaceholder from '../assets/personplaceholder.png'

const ContactDetails = ({ props, contacts }) => {
  const pickedContact = contacts.find(
    x => x.id === parseInt(props.match.params.id)
  ); //compares matched id with contacts id's to find the clicked one
  if (pickedContact) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1>Contact Details</h1>
          <img className="detailImg" src={pickedContact.image_url} alt="" onError={(e)=>{e.target.onerror = null; e.target.src=personplaceholder}}/>
          <ul className="list-group">
            {pickedContact.name !== "" ? (<li><b>Name:</b> {pickedContact.name}</li>) : (<li>Name: N/A</li>)}
            {pickedContact.email !== "" ? (<li><b>Email:</b> {pickedContact.email}</li>) : (<li>Email: N/A</li>)}
            {pickedContact.phone_number !== "" ? (<li><b>Phone Number:</b> {pickedContact.phone_number}</li>) : (<li>Phone Number: N/A</li>)}
          </ul>
        </div>
      </div>
      <Link to="/Contacts">Back</Link>
    </div>
    );
  } else {
    return (
      <div>
        <h1>Error: Contact id not found</h1>
       <Link to="/Contacts">Back</Link>
      </div>
     
    )
  }
};

export default ContactDetails;

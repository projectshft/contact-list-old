import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetails = ({props, contacts}) => {
    const pickedContact = contacts.find(x => x.id == props.match.params.id) //compares matched id with contacts id's to find the clicked one
    return (
    <div className="container">
    <div className="row">
    <div className="col-sm">
    <h1>Contact Details</h1>
    <ul className="list-group">
    <li>{pickedContact.name}</li>
    <li>{pickedContact.email}</li>
    <li>{pickedContact.phone_number}</li>
    </ul>
    <img src={pickedContact.image_url}></img>
    </div>
    </div>
    <Link to='/Contacts'>Back</Link> 
    </div>
    )
    }

export default ContactDetails;
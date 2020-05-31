import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css'


const ContactInfo = ({contactId, contacts}) => {
  const contact = _.find(contacts, { id: contactId });

  if(!contact) {
    alert('contact does not exist');
  }
  return (
    <div className="row">
      <div className="col-md-3 offset-md-5 info-container">
        <h1>{contact.name}</h1>
        <h4>{contact.phone_number}</h4>
        <h4>{contact.email}</h4>
        <div className="img_container">
          <img className="profile_img" src={contact.img_url}/>
        </div>
        <br/>
        <button className="btn btn-primary">
        <Link className="back-link" to='/contacts'>Back</Link>
        </button>
      </div>
    </div>
  )
}

export default ContactInfo

import React from 'react'
import { Link } from 'react-router-dom'

const ContactDetail = (props) => {

    return (
        
        <div className="contact-detail">

            <h2>Contact Details</h2>
           
            {/* <img src={props.contact.imageUrl} alt="{name}"/>

            <h2>{props.contact.name}</h2>

            <p>{props.contact.email}</p>

            <p>{props.contact.phone}</p>
             */}

             <Link to="/contacts">Back</Link>
        </div>
    )
}

export default ContactDetail;
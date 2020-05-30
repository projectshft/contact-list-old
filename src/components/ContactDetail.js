import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import PropTypes from 'prop-types'

const ContactDetail = (props) => {

    //find contact whose id matches id in url
    const contact = _.find(props.contacts, { id: props.contactId });

    return (
        
        <div className="contact-detail">

            <h2>Contact Details</h2>
           
            <img className="detail-image" src={contact.image} alt={contact.name}/>

            <h2>{contact.name}</h2>

            <p>{contact.email}</p>

            <p>{contact.phone}</p>
            

             <Link to="/contacts">Back</Link>
        </div>
    )
}

//set prop types
ContactDetail.propTypes = {
    contactId: PropTypes.number.isRequired,

    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
}))}

export default ContactDetail;


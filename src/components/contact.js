import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Contact = ({contactId, contacts}) => {
    const contact = _.find(contacts, { id: contactId});

    if (!contact) {
        return <div>Contact not found</div>
    }

    return (
        <div>
            <h1>{contact.name}</h1>
            <img src={contact.image_url} alt=''></img>
            <h2>Email: {contact.email}</h2>
            <h2>Phone Number: {contact.phone_number}</h2>
            <Link to='/contacts'>Back</Link>
        </div>
    )
}

Contact.propTypes = {
    contactId: PropTypes.number.isRequired,
    contacts: PropTypes.array.isRequired
}
export default Contact
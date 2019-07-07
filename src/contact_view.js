import {Link} from 'react-router-dom'
import React from 'react'

const ContactView = (props) => {
    const contact = props.getContactById(parseInt(props.match.params.id, 10))

    return (
        <div>
        <h1>Hello {contact.name}</h1><br/>
        <Link to="/contacts">Back</Link>
        </div>
    )
};

export default ContactView
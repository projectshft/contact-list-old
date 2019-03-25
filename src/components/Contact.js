import { Link } from 'react-router-dom'
import React from 'react';
import _ from 'lodash'

const Contact =({props, contacts, match}) => {
    const contact = _.find(contacts, { id: parseInt(match.params.id) });

    if (!contact) {
        return (
            <div>
                <h3>
                    Error - This contact was not found.
                </h3>
                <Link to='/'>Back</Link>
            </div>
        )
    }
    return (
        <div>
            <h3>{contact.name}</h3>
            <h3>email: {contact.email}</h3>
            <h3>phone number: {contact.phone_number}</h3>
            <h3>image url:</h3> <img src={contact.image_url}/>
            <br/>
            <Link to='/'>Back</Link>
        </div>
      )
}

export default Contact;

import {Link} from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

//Shows details of individualcontact that was clicked on
const Contact = ({contactId, contacts}) => {
    //matches the id number
    const contact = _.find(contacts, {id: contactId});
    //in case id number doesnt exist
    if (!contact) {
        return <div>Sorry, but that contact was not found</div>
    }
    return (
        <div>
            <h1>{contact.name}</h1>
            <h2>Phone Number: {contact.phone}</h2>
            <h2>Email: {contact.email}</h2>
            <div>
                <h2>Image:
                </h2>
                <img src={contact.imageURL} width='300px' height='300px' alt='profile pic'></img>
            </div>
            <Link to='/contact'>Back</Link>
            <Link to={`/contact/${contactId}/edit`}>Edit</Link>
        </div>
    )
}

export default Contact

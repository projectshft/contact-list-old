import {Link} from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

//Shows details of individualcontact that was clicked on
const Contact = ({contactId, contacts}) => {
    
    const contact = _.find(contacts, {id: contactId});
    //in case id number doesnt exist
    if (!contact) {
        return <div>Sorry, but that contact was not found</div>
    }
    return (
        <div>
          <img src={contact.imageURL} width="444" height="250"></img>
          <h2>{contact.name}</h2>
          <h4>Email:</h4> <p>{contact.email}</p>
          <h4>Phone:</h4> <p>{contact.phone}</p>
          <Link to="/">Back</Link>
        </div>
    )
}

export default Contact

import { Link } from 'react-router-dom'
import React from 'react';
// import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import _ from 'lodash'

//RENDERS NAME AND NUMBER FOR EACH CONTACT IN LIST
const Contact =({props, contacts, match}) => {
    console.log(contacts);
    const contact = _.find(contacts, { id: parseInt(match.params.id, 10) });

    if (!contact) {
        return (
            <div>
                <h5> 
                    Sorry, but the player was not found
                </h5>

                <Link to='/'>Back</Link>
            </div>
        )

            
    }
    return (
        <div>
            <h3>{contact.name}</h3>
            <h3>email: {contact.email}</h3>
            <h3>image_url: {contact.email}</h3>

            <Link to='/'>Back</Link>
        </div>
        )
   
}



export default Contact;   
import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const ContactDetail = ({routerProps, contacts}) => {
    
    const contact = _.find(contacts, { id: parseInt(routerProps.match.params.contactId, 10) });
    
    if (!contact) {
        return <div>Sorry, there is no record of this contact.<br></br><Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link></div>
    }
    return (
        <div className="container">
            <div className="col-md-12 offset-md-2">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-responsive contact-photo" style={contactPhotoStyle} src={contact.image_url} alt="contact"/>
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <p>{contact.fname} {contact.lname}</p>
                        <p>{contact.phone_number}</p>
                        <p>{contact.email}</p>
                    </div> 
                    <div className="col-md-3">
                        {/* a "Back" button will takes the user back to the /contacts view and main contacts list. */}
                        <Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const contactPhotoStyle = {
    'maxWidth': '200px',
    'maxHeight': '200px',
    'borderRadius': '50%'
}

export default ContactDetail;

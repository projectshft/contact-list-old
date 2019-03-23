import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetail = props => {
    const user = props.match.params.contactId;
    console.log(props.contacts[1].email);

    // isContact = c => c.id === id;
    //     this.contacts.find(isContact);
        
    if (!user) {
        return <div>There is not a record of this contact.<Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link></div>;
    } else {
        return (
            <div className="col-md-12 offset-md-2">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-responsive contact-photo" style={contactPhotoStyle} src={props.contacts[1].image_url} alt="contact"/>
                    </div>
                    <div className="col-md-3">
                        <p>{props.contacts[1].fname} {props.contacts[1].lname}</p>
                        <p>{props.contacts[1].phone_number}</p>
                        <p>{props.contacts[1].email}</p>
                        <p>{props.match.params.contactId}</p>
                    </div>

                    {/* a "Back" button will takes the user back to the /contacts view and main contacts list. */}
                    <Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link>
                </div>
            </div>
        )
    }
}

const contactPhotoStyle = {
    'maxWidth': '200px',
    'maxHeight': '200px',
    'borderRadius': '50%'
}

export default ContactDetail;

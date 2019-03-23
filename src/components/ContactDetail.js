import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetail = props => {
    const clickedContact = props.match.params.contactId;
    console.log(props.contacts[1].email);
    
    function isContact(clickedContact) {
        return clickedContact === props.contacts.id;
    }
    console.log(isContact); //true
    console.log(props.contacts.find(isContact)); //undefined
    // isContact = c => c.id === id;
    //     props.contacts.find(isContact);
        
    if (!clickedContact) { //this doesn't work
        return <div>There is not a record of this contact.<Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link></div>;
    } else {
        return (
            <div className="container">
                <div className="col-md-12 offset-md-2">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-responsive contact-photo" style={contactPhotoStyle} src={props.contacts[1].image_url} alt="contact"/>
                        </div>
                        <div className="col-md-3 offset-md-1">
                            <p>{props.contacts[1].fname} {props.contacts[1].lname}</p>
                            <p>{props.contacts[1].phone_number}</p>
                            <p>{props.contacts[1].email}</p>
                            <p>{props.match.params.contactId}</p>
                        </div>

                        {/* a "Back" button will takes the user back to the /contacts view and main contacts list. */}
                        <Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link>
                    </div>
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

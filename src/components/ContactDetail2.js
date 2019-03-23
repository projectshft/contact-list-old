import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ContactDetail extends Component {


  render() {
    //destructure props
    const { id, fname, lname, email, phone_number, image_url } = this.props.contacts;
        isContact = c => c.id === id;
        this.contacts.find(isContact);
    
    const contact = parseInt(this.props.match.params.id, id);
        if (!contact) {
            return <div>Sorry, you do not have a record of this contact.<Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link></div>;
        } else {
            return (
                <div className="col-md-12 offset-md-2">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-responsive contact-photo" style={contactPhotoStyle} src={image_url} alt="contact"/>
                        </div>
                        <div className="col-md-3">
                            <p>{fname} {lname}</p>
                            <p>{phone_number}</p>
                            <p>{email}</p>
                        </div>

                        {/* a "Back" button will takes the user back to the /contacts view and main contacts list. */}
                        <Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link>
                    </div>
                </div>
            )
        }
    }
}
const contactPhotoStyle = {
    'maxWidth': '200px',
    'maxHeight': '200px',
    'borderRadius': '50%'
}

export default ContactDetail;

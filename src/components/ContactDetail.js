import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';

const ContactDetail = ({routerProps, contacts}) => {
    
    const contact = _.find(contacts, { id: parseInt(routerProps.match.params.contactId, 10) });

    if (!contact) {
        return <div>Sorry, there is no record of this contact.<br></br><Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link></div>
    }
    return (
        <div className="container">
            <div className="col-md-12 offset-md-2">
                <div className="row">
                    <div className="col-md-4 offset-md-2 shadow-sm rounded" style={contactStyle}>
                        <div className="row">
                            <div className="col-md-4 offset-md-2">
                                <img className="img-responsive contact-photo mt-3 mb-3" style={contactPhotoStyle} src={contact.image_url} alt="contact"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8 offset-md-3">
                                <p>Name: {contact.fname} {contact.lname}</p>
                            </div>  
                        </div> 

                        <div className="row">
                            <div className="col-md-8 offset-md-3">
                                <p>Phone: {contact.phone_number}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8 offset-md-3">
                                <p>Email: {contact.email}</p>
                            </div>
                        </div>
                    
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                {/* a "Back" button will takes the user back to the /contacts view and main contacts list. */}
                                <Link to="/contacts"><button className="btn-dark btn btn-sm mb-3">Back to Contacts</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const contactStyle = {
   backgroundColor: '#b19999'
}

const contactPhotoStyle = {
    'maxWidth': '200px',
    'maxHeight': '200px',
    'borderRadius': '50%',
}

ContactDetail.propTypes = {
    contacts: PropTypes.array.isRequired,
    routerProps: PropTypes.object.isRequired
}
export default ContactDetail;

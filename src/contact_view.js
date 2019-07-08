import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import React from 'react'

const ContactView = (props) => {
    const contact = props.getContactById(parseInt(props.match.params.id, 10))

    if (!contact) {
        return (
            <div>
                <Link to="/contacts">Back</Link>
                <h1>No Contacts Added Yet</h1><br/>
            </div>
        ) 
    }

    return (
        <div className="container">
            <div className="row">
                <Link to="/contacts">Back</Link>
            </div>
            <div className="row mb-4">
                <div className="col-4">
                    <h1>{contact.name}</h1>
                </div>
                <div className="col-3">
                    <img className="img-fluid" src={contact.image} alt="No Contact Photo" /> 
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h5><strong>Email:</strong></h5>
                </div>
                <div className="col-5 pl-0">
                    <p> {contact.email}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h5><strong>Phone Number:</strong></h5>
                </div>
                <div className="col-5 pl-0">
                    <p> {contact.phone_number}</p>
                </div>
            </div>
        </div>
    )
};

ContactView.propTypes = {
    getContactById: PropTypes.func.isRequired
}

export default ContactView
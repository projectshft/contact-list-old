import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import React from 'react'

const ContactView = (props) => {
    const contact = props.getContactById(parseInt(props.match.params.id, 10))

    if (!contact) {
        return (
            <div>
                <h1>No Contacts Added Yet</h1><br/>
                <Link to="/contacts">Back</Link>
            </div>
        ) 
    }

    return (
        <div className="container">
        <div className="row">
            <h1 classname="col-md-3">{contact.name} <img className="img-fluid" src={contact.image} alt="Contact Photo" /></h1><br/>
            <div><h4 classname="col-md-2">Email:</h4><h4 className="col-md-2"> {contact.email}</h4></div><br/>
            <div><h4 classname="col-md-2">Phone Number:</h4><h4 className="col-md-2"> {contact.phone_number}</h4></div><br/>            
            <Link to="/contacts">Back</Link>
            </div>
        </div>
    )
};

ContactView.propTypes = {
    getContactById: PropTypes.func.isRequired
}

export default ContactView
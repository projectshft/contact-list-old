import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetail = ({ match }) => {
    console.log('match', match); 
    return (
        <div className="col-md-12 offset-md-2">
            <div className="row">
                <div className="col-md-3">
                    <p>{match.params.contactId}</p>
                </div>

                <Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link>
            </div>  
        </div> 
    );
};


export default ContactDetail;

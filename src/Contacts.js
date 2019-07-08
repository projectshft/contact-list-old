import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import React from 'react'


const Contacts = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3 mr-5 pt-4">  
                    <h1>Contacts</h1>
                </div>
                <div className="col-sm-4">
                    <Link to="/contacts/new">
                        <button className="btn btn-primary btn-lg btn3d" onClick={props.addContact}>Add Contact</button>
                    </Link>
                </div>
            </div>
            
            
            {props.contacts.map(c => (
                <div className="row">
                    <div className="col-md-3 pt-1">
                    <Link to={`/contacts/${c.id}`}>{c.name}</Link><br/>
                    </div>
                </div>
            ))}
                 
        </div>
    )
};

Contacts.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default Contacts
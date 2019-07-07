import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import React from 'react'
import ContactsList from './contacts-list'

const Contacts = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">  
                    <h1>Contacts</h1>
                </div>
                <div className="col-md-3">
                    <Link to="/contacts/new">
                        <button className="btn btn-primary btn-block" onClick={props.addContact}>Add Contact</button>
                    </Link>
                </div>
            </div>
            
            
            {props.contacts.map(c => (
                <div className="row">
                    <div className="col-md-3 p-1">
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
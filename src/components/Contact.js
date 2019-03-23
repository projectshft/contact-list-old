import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

//we will use a class component because Contact will be stateful
export class Contact extends Component {

    // each contact on the main route should be clickable; when clicked, it leads to a new route /contacts/{the id of your contact}
    // onClick
    
    render() {

        const { contact } = this.props;

        return (
            <div>
                <ul className="list-group">
                    <Link to='/contacts/detail'><li className="list-group-item shadow-sm bg-white rounded" style={contactNameStyle}>{contact.fname} {contact.lname}</li></Link>
                    
                    {/* <Link to={`/contacts/${contact.id}`}><li className="list-group-item shadow-sm bg-white rounded" style={contactNameStyle}>{contact.name}</li></Link> */}

                    {/* <li className="list-group-item shadow-sm bg-white rounded" style={contactNameStyle} onClick={this.onClick}>{contact.name}</li> */}
                </ul>
            </div>
        )
    }
}

const contactNameStyle = {
    padding: '1em'
}

{/* Contact should use props to access the state that Contacts holds */}
Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';

//we will use a class component because Contact will be stateful
export class Contact extends Component {
    //to have access to the component's state property, we use a constructor to call super
    constructor() {
       super();
        this.handleClick = this.handleClick.bind(this);
    
    }
    // each contact on the main route should be clickable; when clicked, it leads to a new route /contacts/{the id of your contact}

    //push a new entry onto the history stack
    routeChange () {
        let path = `/contacts/detail`;
        this.props.history.push(path);
    }  
    render() {
        //destructure props
        const { contact } = this.props;

        //a contact's intials are visible to the left of their name in the contacts list
        const firstInitial = contact.fname.charAt(0).toUpperCase();
        const lastInitial = contact.lname.charAt(0).toUpperCase();
        const initials = firstInitial + lastInitial;

        return (
            <div>
                <ul className="list-group">

                    {/* <Link to={`/contacts/${contact.id}`}><li className="list-group-item shadow-sm bg-white rounded" style={contactNameStyle}>{contact.name}</li></Link> */}

                    <li className="list-group-item shadow-sm bg-white rounded" style={contactNameStyle} onClick={this.routeChange} ><span style={initialsStyle}>{initials} </span> {contact.fname} {contact.lname}</li>
                </ul>
            </div>
        )
    }
}
//styling for the items in the lists
const contactNameStyle = {
    padding: '1em'
}
//styling for the initials
const initialsStyle = {
    backgroundColor: '#b19999',
    padding: '1.7%',
    borderRadius: '50%',
    margin: '2.5%',
    color: 'white'
}

{/* Contact should use props to access the state that Contacts holds */}
Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

//give the contact component access to this.props.history so that it can redirect the user on click
export default withRouter(Contact);

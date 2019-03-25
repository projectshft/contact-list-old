import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

//we will use a class component because Contact will be stateful
export class Contact extends Component {

    //give the Contact access to Component's state property with a constructor calling super inside 
    constructor() {
       super();
        this.handleClick = this.handleClick.bind(this);
    
    }
    // each contact on the main route should be clickable; when clicked, it leads to a new route /contacts/{the id of your contact}

    handleClick = () => {
        let path = `/contacts/${this.props.contact.id}`;
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
                    <li className="list-group-item shadow-sm bg-white rounded" style={contactNameStyle} onClick={this.handleClick} ><span style={initialsStyle}>{initials} </span> {contact.fname} {contact.lname}</li>
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

//proptypes to validate the data coming in
Contact.propTypes = {
    //contact must be an object
    contact: PropTypes.object.isRequired,
    // //handleclick must be a function
    // handleClick: PropTypes.func.isRequired,

}

//wrap the component in withRouter to give it access to this.props.history to allow routing
export default withRouter(Contact);


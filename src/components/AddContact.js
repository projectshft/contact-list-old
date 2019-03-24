import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextInputGroup from './TextInputGroup';
import PropTypes from 'prop-types';
import classnames from  'classnames';

//we will use a class component because add contact will be stateful
export class AddContact extends Component {
    //addContact should hold it's own state from the input fields
    state = {
       // id: generateId(),
        fname: '',
        lname: '',
        email: '',
        phone_number: '',
        image_url: '',
        errors: {}
    }
    //addContact should also have access to Contacts state because it will need to add to it

    //AddContact should set state when changes to the input fields happen
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Users should be able to click submit and their new contact be added to Contacts//interactive in the same way as the other contacts
    onSubmit = (e) => {
        e.preventDefault();

        console.log("The user input looks like:", this.state);

        //AddContact should take in router props from App.
        this.props.addContact(this.state.fname, this.state.lname, this.state.phone_number, this.state.email, this.state.image_url);

        //check for empty fields/errors in input
        if (this.state.fname === '') {
            this.setState({errors: { fname: 'First name is required'}});
        }
        if (this.state.lname === '') {
            this.setState({errors: { lname: 'Last name is required'}});
        }
        if (this.state.email === '') {
            this.setState({errors: { email: 'Email is required'}});
        }
        if (this.state.phone_number === '') {
            this.setState({errors: { phone_number: 'Phone number is required'}});
        }
        if (this.state.image_url === '') {
            this.setState({errors: { image_url: 'Image is required'}});
        }

        //clear state after submit (or enter) is pressed
        this.setState({
            fname: '',
            lname: '',
            phone_number: '',
            email: '',
            image_url: '',
            errors: {}
        });

        // After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
        let path = `/contacts/`;
        this.props.history.push(path);

    }

     //Users should be able to press Enter and their new contact be added to Contacts//interactive in the same way as the other contacts
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            //pressing enter should have the same functionality as calling onSubmit()
            this.onSubmit(e);
        }
    }
    // After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
  render() {
      //destructure
    const { fname, lname, phone_number, email, image_url, errors } = this.state;

     //addContact should have input fields to create a new contact
    return (
        <div className="col-md-6 offset-md-3 shadow-sm">
            <div className="row">
                <form name="addContact" style={formStyle} onSubmit={this.onSubmit} onKeyPress={this.handleKeyPress}>
                    <TextInputGroup
                        label="First Name"
                        name="fname"
                        placeholder="Enter First Name"
                        value={fname}
                        onChange={this.onChange}
                    />
                    <TextInputGroup
                        label="Last Name"
                        name="lname"
                        placeholder="Enter Last Name"
                        value={lname}
                        onChange={this.onChange}
                    />
                    <TextInputGroup
                        label="Phone Number"
                        name="phone_number"
                        placeholder="Enter Phone Number"
                        value={phone_number}
                        onChange={this.onChange}
                    />
                    <TextInputGroup
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.onChange}
                    />
                     <TextInputGroup
                        label="Photo"
                        name="image_url"
                        type="url"
                        placeholder="Enter image URL"
                        value={image_url}
                        onChange={this.onChange}
                    />
        
                    <Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link>
                    <input
                        type="submit"
                        className="btn-light btn btn-sm float-right"
                    />
                </form>
            </div>
        </div>
    )
  }
}
const formStyle = {
    backgroundColor: '#b19999',
    padding: '1em'
}

//PropTypes
AddContact.propTypes = {
    addContact: PropTypes.func.isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
}

//enable AddContact to redirect to contacts after form submission
export default withRouter(AddContact);

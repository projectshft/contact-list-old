import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//we will use a class component because add contact will be stateful
export class AddContact extends Component {
    //addContact should hold it's own state from the input fields
    state = {
       // id: generateId(),
        name: '',
        email: '',
        phone_number: '',
        image_url: ''
    }
    //addContact should also have access to Contacts state because it will need to add to it

    //AddContact should set state when changes to the input fields happen
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Users should be able to click submit and their new contact be added to Contacts//interactive in the same way as the other contacts
    onSubmit = (e) => {
        e.preventDefault();
        //the input fields should clear after submit
        this.setState({ [e.target.name]: '' });
        console.log("The user input looks like:", this.state);
    }

    onKeyPress = (e) => {
        if (e.charCode === '13') {
            e.preventDefault();
            this.setState({ [e.target.name]: '' });
            console.log("The user input looks like:", this.state);
        }
    }
    // After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
  render() {
      //destructure
    const { name, email, phone_number, image_url } = this.state;

     //addContact should have input fields to create a new contact
    return (
        <div className="col-md-6 offset-md-3 shadow-sm">
            <div className="row">
                <form style={formStyle} onSubmit={this.onSubmit} onKeyPress={this.onKeyPress}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control form-control-md"
                            placeholder="Enter Name..."
                            value={name}
                            onChange = {this.onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control form-control-md"
                            placeholder="Enter Phone Number..."
                            value={phone_number}
                            onChange = {this.onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control form-control-md"
                            placeholder="Enter Email..."
                            value={email}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Photo">Photo</label>
                        <input
                            type="url"
                            name="image_url"
                            className="form-control form-control-md"
                            placeholder="Image Address..."
                            value={image_url}
                            onChange= {this.onChange}
                        />
                    </div>
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
export default AddContact;

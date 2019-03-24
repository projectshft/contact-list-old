import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//we will use a class component because add contact will be stateful
export class AddContact extends Component {
    //addContact should hold it's own state from the input fields
    state = {
       // id: generateId(),
        fname: '',
        lname: '',
        email: '',
        phone_number: '',
        image_url: ''
    }
    //addContact should also have access to Contacts state because it will need to add to it

    //AddContact should set state when changes to the input fields happen
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

        //attempt at form validation
        // if (emailAdd.value.indexOf("@", 0) < 0) { 
        //     window.alert("Please enter a valid e-mail address."); 
        //     emailAdd.focus(); 
        //     return false; 
        // } 
   
        // if (emailAdd.value.indexOf(".", 0) < 0) { 
        //     window.alert("Please enter a valid e-mail address."); 
        //     emailAdd.focus(); 
        //     return false; 
        // } 
        // if (photo.value == '') {
        //     window.alert("Please enter a photo url");
        //     photo.focus();
        //     return false;
        // }

    //Users should be able to click submit and their new contact be added to Contacts//interactive in the same way as the other contacts
    onSubmit = (e) => {
        e.preventDefault();

        console.log("The user input looks like:", this.state);

        //AddContact should take in router props from App.
        this.props.addContact(this.state.fname, this.state.lname, this.state.phone_number, this.state.email, this.state.image_url);

        //the input fields should clear after submit (or enter) is pressed
        e.target.value = '';

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
    const { fname, lname, phone_number, email, image_url } = this.state;

     //addContact should have input fields to create a new contact
    return (
        <div className="col-md-6 offset-md-3 shadow-sm">
            <div className="row">
                <form name="addContact" style={formStyle} onSubmit={this.onSubmit} onKeyPress={this.handleKeyPress}>
                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            name="fname"
                            className="form-control form-control-md"
                            placeholder="Enter First Name..."
                            value={fname}
                            onChange = {this.onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            className="form-control form-control-md"
                            placeholder="Enter Last Name..."
                            value={lname}
                            onChange = {this.onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone</label>
                        <input
                            type="text"
                            name="phone_number"
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
                            required
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
                            //required
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



//enable AddContact to redirect to contacts after form submission
export default withRouter(AddContact);

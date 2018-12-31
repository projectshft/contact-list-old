// Route = /contactList/new
// generate unique id
// SUBMIT button-- > /contacts

import { Link } from "react-router-dom";
import React from 'react';
// import PropTypes from 'prop-types';
// import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class ContactNew extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            image_url: '',
            email: '',
            phone_number: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
    handleSubmit(e) {
        e.preventDefault()
        const newContact = {
            name: this.state.name,
            image_url: this.state.image_url,
            email: this.state.email,
            phone_number: this.state.phone_number
        };

        this.props.addContact(newContact);
        //pushes new entry onto history stack
        this.state.props.history.push('/contactList')
    }

     render() {
        return (
            <div>
                <form>
                    <label for="name">Name</label>
                    <input type='text' placeholder="First Last" onChange={event => this.setState({ name: event.target.value })
                    } />

                    <br />

                    <label for="phoneNumber">Phone Number</label>
                    <input type="number" name="number" id="phoneNumber" placeholder="(123) 456-7890" onChange={event => this.setState({ phone_number: parseInt(event.target.value, 10) })
                    } />

                    <br />

                    <label for="Email">Email</label>
                   
                    <input
                        type="email"
                        name="email"
                        id="Email"
                        onChange={event =>
                            this.setState({ email: event.target.value })
                        } />
                   
                    <br />

                    <label for="imageUrl">Image URL</label>
                    <input type="url" name="url" id="imageUrl" onChange={event =>
                        this.setState({ image_url: event.target.value })
                    } />

                    <br />
                   
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                   
                </form>
                <Link to="/contactList">Contact List</Link>
            </div>
        )
    }
}





export default ContactNew

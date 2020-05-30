import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


class ContactForm extends React.Component {

    constructor(props) {
        super(props)

        //to hold data from form input
        this.state = {
            name: '',
            email: '',
            phone: '',
            image: ''
        }

        //bind handleClick to contact form
        this.createContact = this.createContact.bind(this);
    }

    //create new contact and add to contacts array on App state
    createContact() {
        console.log('handling click')
        
        //create random id for new contact
        const generateId = () => Math.round(Math.random() * 100000000)

        //new contact to submit
        const newContact = {
            id: generateId(),
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            image: this.state.image
        }

        //check if all fields have been filled out
        if (newContact.name && newContact.email && newContact.phone && newContact.image) {
            console.log('fields completed')

            //add input value to contacts in App
            this.props.addNew(newContact);

            //return to home screen
            this.props.history.push('/')

        } else {
            alert("Please fill out all required fields");
        }
    }

    render() {
        return (
            <div className="add-contact-form">
                <h2>Add Contact</h2>

                <form>

                    <input id="input-name"
                        value={this.state.name}
                        onChange={event => {
                            this.setState({ name: event.target.value })
                        }}
                        placeholder="name"
                        required />

                    <input id="input-email"
                        value={this.state.email}
                        onChange={event => {
                            this.setState({ email: event.target.value })
                        }}
                        placeholder="email address"
                        required />

                    <input id="input-phone"
                        value={this.state.phone}
                        onChange={event => {
                            this.setState({ phone: event.target.value })
                        }}
                        placeholder="phone number"
                        required />

                    <input id="input-image"
                        value={this.state.image}
                        onChange={event => {
                            this.setState({ image: event.target.value })
                        }}
                        placeholder="image URL"
                        required />

                    <button id="submit-contact" type="button" onClick={this.createContact}>Add</button>

                </form>

                <Link to="/contacts">Back</Link>

            </div>
        )
    }
}

//set prop types
ContactForm.propTypes = {
    addNew: PropTypes.func.isRequired
}

export default ContactForm;


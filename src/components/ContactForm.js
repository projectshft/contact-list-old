import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Form, Row, Col, Button } from 'react-bootstrap'
import '../ContactForm.css'

class ContactForm extends Component {

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
                <header>
                    <h1>Add Contact</h1>
                </header>


                <Form>

                    {/* Name Input */}
                    <Form.Group as={Row} controlId="input-name">
                        <Form.Label column sm={2}>Contact Name: </Form.Label>
                        <Col sm={10}>

                            <Form.Control
                                value={this.state.name}
                                onChange={event => {
                                    this.setState({ name: event.target.value })
                                }}
                                placeholder="John Doe"
                                required />
                        </Col>
                    </Form.Group>

                    {/* Email Input */}
                    <Form.Group as={Row} controlId="input-name">
                        <Form.Label column sm={2}>Email Address: </Form.Label>
                        <Col sm={10}>

                            <Form.Control
                                value={this.state.email}
                                onChange={event => {
                                    this.setState({ email: event.target.value })
                                }}
                                placeholder="jdoe@gmail.com"
                                required />
                        </Col>
                    </Form.Group>

                    {/* Phone Number Input */}
                    <Form.Group as={Row} controlId="input-name">
                        <Form.Label column sm={2}>Phone Number: </Form.Label>
                        <Col sm={10}>

                            <Form.Control
                                value={this.state.phone}
                                onChange={event => {
                                    this.setState({ phone: event.target.value })
                                }}
                                placeholder="1 (234) 555-6789"
                                required />
                        </Col>
                    </Form.Group>


                    {/* Image Url Input */}
                    <Form.Group as={Row} controlId="input-name">
                        <Form.Label column sm={2}>Image URL: </Form.Label>
                        <Col sm={10}>

                            <Form.Control
                                value={this.state.image}
                                onChange={event => {
                                    this.setState({ image: event.target.value })
                                }}
                                placeholder="https://www.website.com/contact_image.jpg"
                                required />
                        </Col>
                    </Form.Group>

                    {/* Submit Button */}
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>

                            <Button id="submit-contact" type="button" onClick={this.createContact}>Add New Contact</Button>

                        </Col>
                    </Form.Group>

                </Form>

                {/* Back Link */}
                <div className="back-link">
                    <Link to="/contacts">Back</Link>
                </div>
            </div>
        )
    }
}

//set prop types
ContactForm.propTypes = {
    addNew: PropTypes.func.isRequired
}

export default ContactForm;


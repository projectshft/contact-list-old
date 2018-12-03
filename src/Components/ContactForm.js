import { Route, Link } from "react-router-dom";
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import App from './App';


class ContactForm extends React.Component {
    constructor({addContact, contacts, props}) {
        super(props)

        this.state = {
            // key: '',
            name: '',
            image_url: '',
            email: '',
            phone_number: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const contact = {
            name: this.name,
            image_url: this.image_url,
            email: this.email,
            phone_number: this.phone_number
        };

        this.props.addContact(contact);

        //pushes new entry onto history stack
        // this.state.props.history.push('/contacts')
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input placeholder="First Last" onChange={event => this.setState({ name: event.target.value })} />
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input
                            type="number" name="number" id="phoneNumber" placeholder="(123) 456-7890"
                            onChange={event =>
                                this.setState({ phone_number: event.target.value })
                            } />
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label for="Email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input
                                type="email"
                                name="email"
                                id="Email"
                                onChange={event =>
                                    this.setState({ email: event.target.value })
                                } />
                        </Col>
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label for="imageUrl">Image URL</Label>
                        <Input
                            type="url"
                            name="url"
                            id="imageUrl"
                            onChange={event =>
                                this.setState({ image_url: event.target.value })
                            } />
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Link to="/contacts">
                                <Button onClick={this.handleSubmit}>Submit</Button>
                            </Link>
                        </Col>
                    </FormGroup>
                </Form>

                <Route exact path="/contacts" component={App} />
            </div>
        );
    }
}

ContactForm.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.number
}

export default ContactForm;

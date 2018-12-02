import { Router, Route, Link } from "react-router-dom";
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import App from '../Components/App'


class ContactForm extends React.Component {
    constructor(contact) {
        super(contact)

        this.state = {
            id: '',
            name: '',
            image_url: '',
            email: '',
            phone_number: ''
        }
    }

    handleSubmit(){
        const newContact = {
            id: this.state.id,
            name: this.state.name,
            image_url: this.state.image_url,
            email: this.state.email,
            phone_number: this.state.phone_number
        };
        this.props.addContact(newContact)

        //pushes new entry onto history stack
        this.props.props.history.push('/contacts')
    }

    render() {
        return (
            <Router>
                <Form>
                    <FormGroup>
                        <Label for="name">Valid input</Label>
                        <Input valid onChange={event => this.setState({name: event.target.value})}/>
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                        <FormText>Please enter your first and last names.</FormText>
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label for="phoneNumber">Number</Label>
                        <Input 
                        type="number" name="number" id="phoneNumber" placeholder="number placeholder" 
                            onChange={event =>
                                this.setState({ phone_number: event.target.value })
                            }/>
                    </FormGroup>
                    {/* row matter here or needed on rest? */}

                    <br />

                    <FormGroup row>
                        <Label for="Email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input
                                type="email"
                                name="email"
                                id="Email"
                                placeholder="with a placeholder" 
                                onChange={event =>
                                    this.setState({ email: event.target.value })
                                }/>
                        </Col>
                    </FormGroup>

                    <br />

                    <FormGroup>
                        <Label for="imageUrl">Url</Label>
                        <Input
                            type="url"
                            name="url"
                            id="imageUrl"
                            placeholder="url placeholder"
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
            </Router>
        );
    }
}

ContactForm.propTypes = {
    id: this.PropTypes.number,
    name: this.PropTypes.string.isRequired,
    image_url: this.PropTypes.string,
    email: this.PropTypes.string,
    phone_number: this.PropTypes.number.isRequired
}

export default ContactForm;

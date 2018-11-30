import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default class NewContacts extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Valid input</Label>
                    <Input valid />
                    <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    <FormText>Please enter your first and last names.</FormText>
                </FormGroup>
                
                <FormGroup>
                    <Label for="phoneNumber">Number</Label>
                    <Input type="number" name="number" id="phoneNumber" placeholder="number placeholder" />
                </FormGroup>
{/* row matter here or needed on rest? */}
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Label for="imageUrl">Url</Label>
                    <Input type="url" name="url" id="imageUrl" placeholder="url placeholder" />
                </FormGroup>

                <FormGroup>
                // check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )}
}

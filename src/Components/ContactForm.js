
import React  from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';


class ContactForm extends React.Component {
   constructor(contact){
       super(contact)

       this.state = {
           id: '',
           name: '',
           image_url: '',
           email: '',
           phone_number: ''
       }
   }

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
                    <Label for="Email" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input 
                        type="email" 
                        name="email" 
                        id="Email" 
                        placeholder="with a placeholder" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Label for="imageUrl">Url</Label>
                    <Input 
                    type="url" 
                    name="url" 
                    id="imageUrl" 
                    placeholder="url placeholder" />
                </FormGroup>

                <FormGroup>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
};

export default ContactForm;

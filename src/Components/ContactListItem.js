import { Route, Link } from 'react-router-dom'
import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import App from './App';
import _ from 'lodash'

const ContactListItem = ({ props, contacts, id }) => {
    const person = _.find(contacts, { key: this.props.isExact });
    console.log(person);

    if (!person) {
        return <div>Sorry, but that person was not found</div>
    }
    return (
        <div>
            <Card>
                <CardImg
                    // className="Image"
                    top width="25%"
                    src="{contact.image_url}"
                    alt="Card image cap"
                />

                <CardBody>
                    <CardTitle>{person.name}</CardTitle>

                    <ul>
                        <li>('Phone: ' + {person.phone_number})</li>
                        <li>('email: ' + {person.email})</li>
                    </ul>

                    <Link to="/contacts">
                        <Button>Back</Button>
                    </Link>

                </CardBody>
            </Card>

            <Route exact path="/contacts" component={App} />
        </div>
    );
};

export default ContactListItem;
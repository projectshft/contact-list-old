import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ContactInfo = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="25%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>this.props.name</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    <ul>
                        <li>{'Phone: ' {this.props.phone}}</li>
                        <li>{'email: ' {this.props.email}}</li>
                    </ul>
                    <Button>Back</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default ContactInfo;
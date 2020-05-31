import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from './ContactList';
import PropTypes from 'prop-types';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../css/Home.css'

const Home = (props) => {
    return (
        <Container fluid id="home-page">

            <Row>
                <Col  md={{ span: 4, offset: 1 }}>
                    
                        <h1>Contacts</h1>

                </Col>

                {/* Button to add new contacts */}
                <Col id="add-contact-link" md={4}>

                    {/* direct to contact form on click */}
                    <Link to="/contacts/new">
                        <Button id="add-contact-button" type="text">Add Contact</Button>
                    </Link>

                </Col>
                
            </Row>
            <hr/>
            {/* Full list of contacts */}
            <Row>
                <Col>

                    <ContactList contacts={props.contacts} />

                </Col>
            </Row>

        </Container>
    )
}

//set prop types
Home.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        image: PropTypes.string
    }))
}

export default Home;


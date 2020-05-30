import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from './ContactList';
import PropTypes from 'prop-types';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../Home.css'

const Home = (props) => {
    return (
        <Container id="home-page">

            <Row>
                <Col>
                    <h1>Contacts</h1>
                </Col>
            </Row>

            {/* Full list of contacts */}
            <Row>
                <Col md={{ offset: 3 }}>
                    <ContactList contacts={props.contacts} />
                </Col>
            </Row>

            {/* Button to add new contacts */}
            <Row>
                <Col md={{ offset: 3 }}>

                    {/* direct to contact form on click */}
                    <Link to="/contacts/new">
                        <Button type="text">Add Contact</Button>
                    </Link>

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


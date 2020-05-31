import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Row, Col, Container } from 'react-bootstrap'
import '../css/ContactList.css'

// list of contacts shown on home page
const ContactList = (props) => {

    // display each contact name and link to view contact details, with links also to edit and delete
    const listedContacts = props.contacts.map((contact) => {
        return (
            <Row key={contact.id} className="contact">

                {/* Contact Name */}
                <Col className="contact-name" md={5}>
                    <Link to={`/contacts/${contact.id}`} className="contact-link">{contact.name} </Link>
                    <hr/>
                </Col>
                
                {/* Spacer */}
                <Col className="spacer-col" md={3}>
                <span className="spacer">- - - - - -</span>
                <hr/>
                </Col>
                
                {/* Edit & Remove Links */}
                <Col md={4}>
                    <Link to="" className="edit-link"> edit</Link>

                    <Link to="" className="delete-link"> delete</Link>
                    <hr/>
                </Col>
                
            </Row>

            
        )
    });

    return (

        <Container fluid>
            <Row>
                <Col id="contact-list">

                    {listedContacts}

                </Col>
            </Row>
        </Container>

    )
}

//set prop types
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        phone: PropTypes.string,
        image: PropTypes.string
    }))
}

export default ContactList;
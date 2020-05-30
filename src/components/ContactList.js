import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

// list of contacts shown on home page
const ContactList = (props) => {

    // display each contact name and link to view contact details, with links also to edit and delete
    const listedContacts = props.contacts.map((contact, index) => {
        return (
            <Row key={index} className="contact">

                <Col className="contact-link" md={4}>
                <Link to={`/contacts/${contact.id}`} >{contact.name} </Link>
                </Col>

                <Col className="contact-link" md={1}>
                <Link to="" className="edit-link"> edit</Link>
                </Col>

                <Col className="contact-link" md={1}>
                <Link to="" className="delete-link"> delete</Link>
                </Col>

            </Row>
        )
    });

    return (
        <div id="contact-list">

            {listedContacts}

        </div>
    )
}

//set prop types
ContactList.propTypes = {contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string
}))}

export default ContactList;
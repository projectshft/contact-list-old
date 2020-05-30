import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from './ContactList';
import PropTypes from 'prop-types'

const Home = (props) => {
    return (
        <div id="home-page">
            <h1>Contacts</h1>

            {/* direct to contact form on click */}
            <Link to="/contacts/new">
                <button className="add-button" type="text">Add Contact</button>
            </Link>

            <ContactList contacts={props.contacts} />
        </div>
    )
}

//set prop types
Home.propTypes = {contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    image: PropTypes.string
}))}

export default Home;


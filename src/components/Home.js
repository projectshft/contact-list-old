import React from 'react';
import ContactList from './ContactList';

const Home = () => {
    return (
        <div id="home-page">
        <h1>Contacts</h1>

        <button className="add-button" type="text">Add Contact</button>

        <ContactList />
        </div>
    )
}

export default Home;
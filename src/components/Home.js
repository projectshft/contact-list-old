//component that will be accessed by /contacts (default on load). will contain the contact list
// as well as the add new contact component 
import React from 'react'
import ContactList from './ContactList'

const Home = () => (
    <div>
        <h1>Contacts</h1>
        <button>Add Contact</button>
        <ContactList />
    </div>
    
)


export default Home;
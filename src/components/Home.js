//component that will be accessed by /contacts (default on load). will contain the contact list
// as well as the add new contact component 
import React from 'react'
import ContactList from './ContactList'
import AddContact from './AddContact'

const Home = () => (
    <div>
        <h1>Contacts</h1>
        <AddContact />
        <ContactList />
    </div>
    
)


export default Home;
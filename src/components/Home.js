//component that will be accessed by /contacts (default on load). will contain the contact list
// as well as the add new contact component 
import React from 'react'
import ContactList from './ContactList'
import AddContact from './AddContact'
import { Route } from 'react-router-dom'




const Home = ({contacts}) => (
    
    <div>
        <h1>Contacts</h1>
        <AddContact />
        <Route path='/contacts' render={() => (
            <ContactList contacts={contacts} />
        )}/>

        
    </div>
    
)


export default Home;
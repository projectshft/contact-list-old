//component that will be accessed by /contacts (default on load). will contain the contact list
// as well as the add new contact component 
import React from 'react'
import ContactList from './ContactList'
import AddContact from './AddContact'
import { Route } from 'react-router-dom'
import NewContact from './NewContact'
import '../CSS/Home_ContactList_AddContact.css'
import { Link } from 'react-router-dom'

const Home = ({contacts, addContact}) => (
    
    <div id='home-view'>
        <AddContact />
        <Route path='/contacts' render={() => (
            <ContactList contacts={contacts} />
        )}/>
        <Route path='/contacts/new' render={() => (
            <NewContact contacts={contacts} addContact={addContact} />
        )}/>
        <Link to='/'><button className='contact-btn btn btn-info btn-lg'>Back</button></Link>
        
    </div>
    
)


export default Home;
import { Switch, Route} from 'react-router-dom';
import React from 'react';
import TheContact from './TheContact';
import ContactNew from './ContactForm';
import FullList from './FullList';


const ContactList = ({ contacts, addContact }) => (
    
    <Switch>
    <Route path='contactList/new' render={(props) => (
        <ContactNew props={props} contacts={contacts} addContact={addContact} />
    )} />

    <Route path="/contactList/:id" render={(props) => (<TheContact props=       {props} contacts={contacts} />
    )} />
    

    <Route path='/contactList'  render={() => (
        <FullList contacts={contacts} />
    )} />
</Switch>
    )




export default ContactList
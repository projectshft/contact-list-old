import { Switch, Route} from 'react-router-dom'
import React from 'react';
import Contact from './contact';
import NewContact from './NewContact';
import AllContacts from './AllContacts'
import PropTypes from 'prop-types'


const Contacts= ({contacts, addContact, deleteContact}) => (
    <Switch>
        <Route path='/contacts/new' render={(routerProps) => (
            <NewContact history={routerProps.history} addContact={addContact} contacts={contacts}/>
        )}/>

        <Route path='/contacts/:id' render={(routerProps) => (
            <Contact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
        )}/>

        <Route path='/contacts' render={() => (
            <AllContacts contacts={contacts} deleteContact={deleteContact}/>
        )}/>
    </Switch>
)

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired
}

export default Contacts

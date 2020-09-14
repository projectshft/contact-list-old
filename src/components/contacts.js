import { Switch, Route} from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import NewContact from './NewContact';
import AllContacts from './AllContacts'
import PropTypes from 'prop-types'


const Contacts= ({contacts, addContact, deleteContact}) => (
    <Switch>
        {/* Pass history and addContact as props for later use inside of handleSubmitContactClick() in NewContact */}
        <Route path='/contacts/new' render={(routerProps) => (
            <NewContact history={routerProps.history} addContact={addContact} contacts={contacts}/>
        )}/>

        {/* Pass contactId to, within Contact, check if it exists */}
        <Route path='/contacts/:id' render={(routerProps) => (
            <Contact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
        )}/>

        {/* Pass deleteContact again to make sure its usable in every render of AllContacts */}
        <Route path='/contacts' render={() => (
            <AllContacts contacts={contacts} deleteContact={deleteContact} />
        )}/>
    </Switch>
)

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default Contacts

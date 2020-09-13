import { Switch, Route} from 'react-router-dom'
import React from 'react';
import Contact from './contact';
import NewContact from './NewContact';
import AllContacts from './AllContacts'


const Contacts = ({contacts}) => (
    <Switch>
        <Route path='/contacts/new' render={(routerProps) => (
            <NewContact history={routerProps.history} addContact={addContact} contacts={contacts}/>  
        )}/>

        <Route path='/contacts/:id' render={(routerProps) => (
            <Contact contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
        )}/>

        <Route path='/contacts' render={() => (
            <AllContacts contacts={contacts} />
        )}/>
    </Switch>
)

export default Contacts

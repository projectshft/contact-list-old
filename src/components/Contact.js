import { Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import FullContactList from './FullContactList.js'
import ContactInfo from './ContactInfo.js'
import ContactNew from './ContactNew.js';
import 'bootstrap/dist/css/bootstrap.css';

//component for rendering all contacts in the app's list of contacts
const Contact = ({contacts, addContact}) => (
  <div>
    <Switch>
      {/* passing contacts and addContact function from App.js to ContactNew component */}
      <Route path='/contacts/new' render={(routerProps) => (
        <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
      )}/>
      
      {/* creating a route for each contact to link to it's respective ContactInfo */}
      <Route path='/contacts/:id' render={(routerProps) => (
        <ContactInfo contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
        
      )}/>

      {/* rendering the full contact list in App.js */}
      <Route path='/contacts' render={() => (
        <div className ="row text-center">
          <div className="col-md-4 offset-2 mt-5">
            <div className="page-header">
              <h1>Contact Info</h1>
            </div>
            <div>
              {/* Adding a button to link to the ContactNew component */}
            <button><Link to='/contacts/new'>Add a Contact</Link></button>
            <br />
            {/* passing contacts props to FullContact List */}
            <FullContactList contacts={contacts} />
            </div>
          </div>
        </div>
      )}/>
    </Switch>
    
  </div>
    
)

export default Contact;
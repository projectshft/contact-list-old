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
      <Route path={['/', '/contacts']} render={() => (
        <div className ="row">
          <div className="col-md-6 offset-3 mt-5">
            <div className="row mb-4">
              <div className="col-md-5">
                <h1>Contacts</h1>
              </div>
              <div className="col-md-6 text-left pt-2 pl-0">
                {/* Adding a button to link to the ContactNew component */}
                <button className="btn btn-primary"><Link className="text-white" to='/contacts/new'>Add Contact</Link></button>
              </div>
            </div>

            
            <div>

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
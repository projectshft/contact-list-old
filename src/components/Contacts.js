import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ContactDetail from './ContactDetail'
import NewContact from './NewContact'
import UpdateContactInfo from './UpdateContactInfo'
import ContactList from './ContactList'

export default function Contacts(props) {
  //sample data to start set to contacts
  let sample = [
      {  id: 1, name: "Ben Blocker", phone: "444-333-2211", email: "test@gmail.com", photo: " empty " },
      { id: 2, name: "Tim Smith", phone: "444-333-2211", email: "test@gmail.com", photo: " empty " },
   ]

	const [contacts, setContacts] = useState(sample);

	return (
  	<div>
  	    <Switch>
  	      <Route path="/contacts/add" render={(routerProps) => (
  			<NewContact  contacts={contacts} history={routerProps.history} />
  			)}/>
  	      <Route path="/contacts/:id/update" render={(routerProps) => (
        <UpdateContactInfo  contacts={contacts} contactId={routerProps.match.params.id} history={routerProps.history} />
        )}/>
  	      <Route path="/contacts/:id" render={(routerProps) => (
            <ContactDetail  contactId={routerProps.match.params.id} contacts={contacts} />
            )}/>
  	      <Route path='/contacts' render={() => (
  			<ContactList contacts={contacts} />
  			)}/>
  	    </Switch>

  	</div>
	)
};

Contacts.propTypes = {
  contacts: PropTypes.array
};

// class Contacts extends React.Component {
//   render() {
//     return (
//       <div>
//       	Contacts Main
//       </div>
//     )
//   }
// }

// export default Contacts;
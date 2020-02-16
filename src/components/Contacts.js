import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import faker from 'faker'
import ContactDetail from './ContactDetail'
import NewContact from './NewContact'
import UpdateContactInfo from './UpdateContactInfo'
import ContactList from './ContactList'
const uuidv4 = require('uuid/v4');

export default function Contacts(props) {
  //sample data to start set to contacts
  let image = faker.image.avatar();
  let sample = [
      {  id: uuidv4(), name: "Ben Blocker", phone: "444-333-2211", email: "test@gmail.com", photo: {image} },
      { id: uuidv4(), name: "Tim Smith", phone: "444-333-2211", email: "test@gmail.com", photo: {image} },
   ]

	const [contacts, setContacts] = useState(sample);

  const updateContacts = contact => {
    const newContacts = contacts.map((c) => {
      if (contact.id == c.id) {
        c = contact;
      }
      console.log(c)
      return c;
    })
    setContacts(newContacts);
  }

	return (
  	<div>
  	    <Switch>
  	      <Route path="/contacts/add" render={(routerProps) => (
  			<NewContact  contacts={contacts} history={routerProps.history} />
  			)}/>
  	      <Route path="/contacts/:id/update" render={(routerProps) => (
        <UpdateContactInfo  contacts={contacts} contactId={routerProps.match.params.id} updateContacts={updateContacts} history={routerProps.history} />
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

  Contacts.propTypes = {
    contacts: PropTypes.array.IsRequired,
    updateContacts: PropTypes.func.IsRequired
  };
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
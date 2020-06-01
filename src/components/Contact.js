import { Switch, Route } from 'react-router-dom'
import React from 'react'
import ContactInfo from './ContactInfo'
import FullContactsList from './FullContactsList'
import ContactNew from './ContactNew'
import PropTypes from 'prop-types'

//router to send user to different components
const Contact = ({contacts, addContact}) => (
  <Switch>
    {
      //path for form to create a new contact
    }
    <Route path='/contacts/new' render={(routerProps) => (
      <ContactNew history={routerProps.history} contacts={contacts} addContact={addContact} />
    )}/>

    {
      //path for a specific contact to show full info
    }
    <Route path='/contacts/:id' render={(routerProps) => (
      <ContactInfo contactId={parseInt(routerProps.match.params.id, 10)} contacts={contacts} />
    )}/>

    {
      //path to show full list of contacts
    }
    <Route path='/' render={() => (
      <div>
        <FullContactsList contacts={contacts} />
      </div>
    )}/>

  </Switch>
)

Contact.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.exact({
    "id": PropTypes.number.isRequired,
    "name": PropTypes.string.isRequired,
    "phone_number": PropTypes.string.isRequired,
    "img_url": PropTypes.string.isRequired,
    "email": PropTypes.string.isRequired
  }))
}

export default Contact

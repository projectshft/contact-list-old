import { Route, Switch } from 'react-router-dom'
import React, {Component} from 'react'
import ContactList from './contact_list'
import EditContactForm from './edit_contact_form'

class ContactsView extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/contacts' component={ContactList} />
        <Route path='/contacts/:id' component={EditContactForm} />
      </Switch>
    )
  }
}

export default ContactsView

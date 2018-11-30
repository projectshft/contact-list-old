import { Switch, Route } from 'react-router-dom';
import React from 'react';
import FullContact from './FullContact';
import EditContact from './EditContact';
import {getState} from '../state'


const ContactDetail = () => {
  const contact = getState('selectedContact');
  return (
    <Switch>
      <Route exact path='/contacts/:id' component = {FullContact}/>
      <Route path='/contacts/:id/edit' component = {EditContact}/>
    </Switch>
  )

}

export default ContactDetail

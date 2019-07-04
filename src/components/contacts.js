import { Switch, Route } from 'react-router-dom'
import React from 'react';
import FullContactList from './FullContactList'
import IndividualContact from './IndividualContact'


const Contacts = () => {
  return (
    <Switch>
    <Route exact path = '/contacts' component = {FullContactList} />
    <Route path = '/contacts/:id' component = {IndividualContact} />
    </Switch>
  );
}
export default Contacts

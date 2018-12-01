import { Switch, Route } from 'react-router-dom';
import React from 'react';
import FullContact from './FullContact';
import EditContact from './EditContact';

const ContactDetail = () =>
    <Switch>
      <Route exact path='/contacts/:id' component = {FullContact}/>
      <Route path='/contacts/:id/edit' component = {EditContact}/>
    </Switch>

export default ContactDetail

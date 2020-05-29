import { Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import FullContactList from './FullContactList.js'

class Contact extends Component {
  constructor() {
    super()
  }
    
  
  
    render() {
      return (
        <div>
          <Switch>
          <Route path='/contacts' render={() => (
            <FullContactList contacts={contacts} />
          )}/>
          </Switch>
        </div>
      );
    }
}

export default Contact;
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import React from 'react';
import Contacts from "./Contacts.js";


<Route path='/contacts' render={() => (
  <Contacts addContact={this.addContact} players={this.state.contacts} />
)}/>


export default Route;

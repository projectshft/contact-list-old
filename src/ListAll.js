import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import ContactsList from './ContactsList';
import { add } from 'lodash';
import AddContact from './AddContact';

const ListAll = ({history, addContact, contacts}) => {

  return (
    
    <div className="App container">
        <Switch>
      <Route path='/contacts/new' render={() => (
        <AddContact history={history} addContact={addContact} />
        )}/>
    </Switch>
      <div className="row">
      <header className="App-header">
        <div className="col-md">
         <h1 className="App-title float-left">Contacts</h1>
       
        <a href="/contacts/new" className="border float-right shadow ml-5 mt-2 p-1 text-reset"> <h4>Add Contact</h4></a>
        </div>
      </header>
      </div>
      <div className="row mt-3">
        <div className="col-md">
        <ContactsList contacts={contacts}/>
      </div>
      </div>
  
  
    </div>
)
}

  export default ListAll
  
  

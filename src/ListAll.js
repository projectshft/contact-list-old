import {Route, Switch } from 'react-router-dom'
import React from 'react';
import ContactsList from './ContactsList';
import AddContact from './AddContact';
import PropTypes from 'prop-types';

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
       
        <a href="/contacts/new" className="badge badge-light float-right shadow-sm ml-5 mt-2 pl-1 pr-1 pt-2 text-reset align-bottom"> <h5>Add Contact</h5></a>
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
ListAll.proptypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}

  export default ListAll
  
  

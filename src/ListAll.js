import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import ContactsList from './ContactsList';
import { add } from 'lodash';
import AddContact from './AddContact';

class ListAll extends Component {
  constructor () {   //{addContact, contacts}
    super()
    console.log('ListAll props ', this.props);
   
    this.handleAddContactClick = this.handleAddContactClick.bind(this);
    // this.addContact = this.addContact.bind(this); // will be sent to AddContact via props
  }

  handleAddContactClick () {
    //route-link to AddContact component
    console.log('AddContactClick');
    this.props.history.push({pathname: '/new'});
  }

render() {
  return (
    <div className="App container">
      <div className="row">
      <header className="App-header">
        <div className="col-md">
         <h1 className="App-title float-left">Contacts</h1>
       
        <a href="/contacts/new"> Add Contact</a>
        </div>
      </header>
      </div>
      <div className="row mt-3">
        <div className="col-md">
        <ContactsList contacts={this.props.contacts}/>
      </div>
      </div>
  
    <Switch>
      <Route path='/contacts/new' render={(routerProps) => (
        <AddContact history={routerProps.history} addContact={addContact} />
        )}/>
    </Switch>
    </div>
)
}}

  export default ListAll
  // old button code
  // <button type="button" onClick={this.handleAddContactClick} className="btn float-right btn-outline-dark shadow add-contact ml-5 mt-2">Add Contact</button>
  //  <form action="/new">
  // <input type="submit" value="Add Contact" className="btn float-right btn-outline-dark shadow add-contact ml-5 mt-2"></input>
  // </form>
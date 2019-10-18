import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactList from './ContactList';
import NewContact from './Newcontact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {
  constructor () {
    super() 

    this.state = {
      contacts: [
        { id: 1, name: 'Tom Franks', number: '919-450-2551', email: 'tom@gmail.com' },
        { id: 2, name: 'Betty Draper', number: '919-450-2111', email: 'betty@gmail.com' },
        { id: 3, name: 'Barry Smith', number: '919-450-2431', email: 'barry@gmail.com' }
      ]

    } 
    this.addContact = this.addContact.bind(this);
   
  }
    

  addContact (contact) {
      this.setState({ contacts: this.state.contacts.concat([contact]) });
  }

  handleClick () {
    this.setState({ routeToContactList: !this.state.routeToContactList });
  }
  
  render() {
    const routeToContactList = () => {
      if (this.state.ContactList) {
         return <Switch>
                    <Route exact path="/contactslist" render={() => (
                      <ContactList contactList={this.state.contacts} /> )}/>
                </Switch>


      
      }
    }
  
  
    return (
      <div className="App">
       <header className="App-header">
        </header>
          <div className="App-intro"> 
           <div className="row">
            <div className="col-8">
              <h1 className="App-title">Contact List</h1>
            </div>
            <button onClick= {routeToContactList}type="button" className="btn btn-primary">Add New Contact</button>
          </div>
        </div>
      </div>



      
  
      );
  }
  
};





export default App;

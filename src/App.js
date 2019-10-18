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
    // this.addContact = this.addContact.bind(this);
   
  }
   handleClick () {
      this.addContact('george','716-898-6767','hello@gmail.com')
  }
  
  addContact (name,number,email) {
    const generateId = () => Math.round(Math.random() * 100000000);
    const newContact = {
      id: this.generateId,
      name: name,
      number: number,
      email: email
    }
     
    console.log(newContact)
    
      // this.setState({ contacts: this.state.contacts.concat([contact]) });
  }



  
  render() {
  
    return (

      <div className="App">
       <header className="App-header">
        </header>
          <div className="App-intro"> 
           <div className="row">
            <div className="col-8">
              <h1 className="App-title">Contact List</h1>
            </div>
            <button onClick= {this.handleClick}type="button" className="btn btn-primary">Add New Contact</button>
          </div>
        </div>
        <ContactList contacts={this.state.contacts} />
        <Switch>
          <Route exact path="/" component={ContactList} />
          <Route
            path="/contact/new"
            render={props => (
              <ContactList props={props} component={ContactList} />
            )}
          />
          <Route path="/contact/new" component={NewContact} />
          {/* <Route path="/contact/:number" component={ContactList} /> */}
        </Switch>
      </div>

    );
  }
  
};





export default App;

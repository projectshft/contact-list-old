import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList'

class App extends Component {
  constructor() {
    super()
  
    this.state = {
      contacts: [{
      Name: "Jane Doe",
      id: null,
      email: "Jane.Doe@gmail.com",
      phone:"919-555-5555"
    },
    {
      Name: "John Doe",
      id: null,
      email: "John.Doe@gmail.com",
      phone: "984-555-5555"
    },
    {
      Name: "Tom Smith",
      id: null,
      email: "tom.smith@gmail.com",
      phone: "336-555-5555"
    }]
    }
    this.addContact = this.addContact.bind(this)
    }
  addContact(name, number, email) {
    const generateId = () => Math.round(Math.random() * 100000000);
    const newContact = {
      id: generateId(),
      name: name,
      number: number,
      email: email
    }
  
  // {   this.setState({ contacts: this.state.contacts.concat([contact]) });
  }
  render() {
    return (
    <div className="row">
        <div className="col-md-6 offset-md-3">
          <header className="page-header">
            <h1><strong>Contact List</strong></h1>
          </header>
          <button type="button" id="add new contact" className="btn btn-success add-contact" size="lg" block>Add a New Contact</button>
          {/* TODO: ADD EVENT TO ROUTE ADD NEW CONTACT TO CONTACT FORM /contact/new */}
          
          <ul>
           CONTACT LINK GOES HERE ------------
            <button type="button" className="btn btn-primary">EDIT</button> <button type="button" className="btn btn-danger">DELETE</button>
          </ul>

          
          
          
          <div className="contacts">
          </div>

          <Switch>
            {/* <Route exact path="/contacts" component={ContactForm} /> */}
            <Route path="/contacts/new" component={ContactForm} />
            {/* <Route path="/contacts/:id" component={contacts} /> */}
          </Switch>
         

          <ContactForm addContact={this.addContact} />
        </div>
      </div>
    );
  }
}





export default App;
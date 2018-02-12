import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import ContactView from './contact-view';
import ContactList from './contact-list';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
      ]
    }
  }

  handleDelete = (contactToDelete) => {
    let confirm = window.confirm(`Are you sure you want to delete ${contactToDelete.name}?`);
    if (!confirm) {
      return
    } else {
      //first, use ID to find the index of the contact to be deleted in our state's contacts array
      let indexToUpdate = this.state.contacts.findIndex((contact) => {return contact.id === contactToDelete.id});

      //then make a copy array and remove the contact at the found index.
      let newContacts = this.state.contacts.slice();
      newContacts.splice(indexToUpdate, 1);

      //set the spliced array as the new value of state.contacts
      this.setState({contacts: newContacts})
    }

  }

  handleUpdate = (updatedContact) => {
    //first, use ID to find the index of the contact to be updated in our state's contacts array
    let indexToUpdate = this.state.contacts.findIndex((contact) => {return contact.id === updatedContact.id});

    //then make a copy array and update the contact at the found index.
    let newContacts = this.state.contacts.slice();
    newContacts.splice(indexToUpdate, 1, updatedContact);

    //set the spliced array as the new value of state.contacts
    this.setState({contacts: newContacts})
  }

  handleAdd = (contact) => {
    this.setState({
      contacts: this.state.contacts.concat([contact])
    })
  }


  render () {
    return (
      <Switch>
        {/* render functions inside Route tags pass props to components */}
        <Route exact path='/' render = {() => <ContactList contacts={this.state.contacts} handleDelete={this.handleDelete} />}/>

        {/* Use spread operator to pass Router's match props to component page. The match props allow the component page to access its own id, which will be used to determine which contact to show. */}
        <Route path='/add' render = {(props) => <ContactView contacts={this.state.contacts} handleAdd={this.handleAdd} {...props} />} />

        <Route path='/:id' render = {(props) => <ContactView contacts={this.state.contacts} handleUpdate={this.handleUpdate} {...props} />} />

      </Switch>

    )
  }
}


const root = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
  root
);

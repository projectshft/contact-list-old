import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactList from '../components/ContactList';
import Contact from './Contact';
import NewContact from '../components/NewContact';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };

    const generateId = () => Math.round(Math.random() * 100000000);

    // Random users API returns names in lowercase
    const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

    // Fetch random contacts and setup state upon app initialization
    fetch('https://randomuser.me/api/?results=10&inc=name,picture,email,phone&nat=US')
      .then(resp => resp.json())
      .then(myJson => {
        const contacts = myJson.results.map(contact => {
          return {
            id: generateId(),
            name: `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`,
            email: contact.email,
            phone: contact.phone,
            image: contact.picture.large
          };
        });
        this.setState({contacts});
      });
  }

  addContact = contact => {
    this.state.contacts.concat([contact]);
  }

  deleteContact = contact => {
    this.state.contacts.filter(c => c === contact);
  }

  editContact = contact => {
    // TODO: Implement function
  }

  render() {
    return (
      <Switch>
        <Route exact path='/contacts' render={routerProps => (
          <ContactList routerProps={routerProps} contacts={this.state.contacts} /> 
        )} />
        <Route path='/contacts/new' render={routerProps => (
          <NewContact routerProps={routerProps} addContact={this.addContact} />
        )} />
        <Route path='/contacts/:id' component={Contact} render={routerProps => (
          <Contact routerProps={routerProps} contacts={this.state.contacts} editContact={this.editContact} deleteContact={this.deleteContact}/>
        )} />
      </Switch>
    );
  }
}

export default Contacts;
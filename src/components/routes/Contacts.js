import React, {Component, Fragment} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import ContactList from '../ContactList';
import Contact from './Contact';
import NewContact from '../NewContact';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };

    this.fetchContacts();
  }

  generateId = () => Math.round(Math.random() * 100000000);
  // Random users API returns names in lowercase
  capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  // Fetch random contacts and setup state upon app initialization
  fetchContacts = () => {
    fetch('https://randomuser.me/api/?results=10&inc=name,picture,email,phone&nat=US')
      .then(resp => resp.json())
      .then(myJson => {
        const contacts = myJson.results.map(contact => {
          return {
            id: this.generateId(),
            name: `${this.capitalizeFirstLetter(contact.name.first)} ${this.capitalizeFirstLetter(contact.name.last)}`,
            email: contact.email,
            phone: contact.phone,
            image: contact.picture.large
          };
        });
        this.setState({contacts});
      });
  }

  // Add contact to the state's contacts array
  addContact = contact => {
    this.setState({
      contacts: this.state.contacts.concat([contact])
    });
  }

  // Remove contact from the states contacts array
  deleteContact = contact => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== contact.id)
    });
  }

  // Edit a contact's information
  editContact = contact => {
    this.setState({
      contacts: this.state.contacts.map(c => {
        if(c.id === contact.id) { // Match updated contact parameter to contact in contacts state
          c = {
            ...c,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            image: contact.image
          }
        }
        return c; // Updated contact
      })
    });
  }

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/contacts">eContacts</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/contacts/new">Add Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/contacts' render={() => (
            <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} /> 
          )} />
          <Route path='/contacts/new' render={routerProps => (
            <NewContact routerProps={routerProps} addContact={this.addContact} />
          )} />
          <Route path='/contacts/:id' render={routerProps => (
            <Contact routerProps={routerProps} contacts={this.state.contacts} editContact={this.editContact} deleteContact={this.deleteContact} />
          )} />
        </Switch>
      </Fragment>
    );
  }
}

export default Contacts;
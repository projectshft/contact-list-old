import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactList from '../components/ContactList';
import Contact from './Contact';
import NewContact from '../components/NewContact';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {id: 14808094, name: "Carole Graves", email: "carole.graves@example.com", phone: "(381)-588-2660", image: "https://randomuser.me/api/portraits/women/94.jpg"},
        {id: 29436895, name: "Georgia Alvarez", email: "georgia.alvarez@example.com", phone: "(798)-473-0583", image: "https://randomuser.me/api/portraits/women/0.jpg"},
        {id: 5299408, name: "Wade Lewis", email: "wade.lewis@example.com", phone: "(803)-786-3649", image: "https://randomuser.me/api/portraits/men/29.jpg"}
      ]
    };
  }

  // generateId = () => Math.round(Math.random() * 100000000);
  // // Random users API returns names in lowercase
  // capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  // // Fetch random contacts and setup state upon app initialization
  // fetchContacts = () => {
  //   fetch('https://randomuser.me/api/?results=10&inc=name,picture,email,phone&nat=US')
  //     .then(resp => resp.json())
  //     .then(myJson => {
  //       const contacts = myJson.results.map(contact => {
  //         return {
  //           id: this.generateId(),
  //           name: `${this.capitalizeFirstLetter(contact.name.first)} ${this.capitalizeFirstLetter(contact.name.last)}`,
  //           email: contact.email,
  //           phone: contact.phone,
  //           image: contact.picture.large
  //         };
  //       });
  //       console.log(contacts);
  //       this.setState({contacts});
  //     });
  // }

  addContact = contact => {
    this.setState({
      contacts: this.state.contacts.concat([contact])
    });
  }

  deleteContact = contact => {
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== contact.id)
    });

    console.log(this.state.contacts)
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
        <Route path='/contacts/:id' render={routerProps => (
          <Contact routerProps={routerProps} contacts={this.state.contacts} editContact={this.editContact} deleteContact={this.deleteContact} />
        )} />
      </Switch>
    );
  }
}

export default Contacts;
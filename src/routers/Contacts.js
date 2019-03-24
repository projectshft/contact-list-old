import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsList from '../components/contactsList';
import AddContact from '../components/addContact';
import ContactInfo from '../components/contactInfo';

/* This component handles the main state of the app, any functions that change the apps state, along with
   the routes for the main page views. */

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          "id": 70219577,
          "lastName": "Einstein",
          "firstName": "Albert",
          "email": "aeinstein@example.com",
          "phone": "15555555555",
          "imageURL": "https://upload.wikimedia.org/wikipedia/en/8/86/Einstein_tongue.jpg"
        },
        {
          "id": 70219566,
          "lastName": "DJ",
          "firstName": "Marshmello",
          "email": "marshmello@sickbeats.com",
          "phone": "123456789",
          "imageURL": "https://pbs.twimg.com/profile_images/1102011359481389056/EKK_BaDW_400x400.jpg"
        },
        {
          "id": 70219523,
          "lastName": "Cat",
          "firstName": "Pirate",
          "email": "arrrr@cutekittens.com",
          "phone": "123-867-5309",
          "imageURL": "https://images-na.ssl-images-amazon.com/images/I/51yL023V6kL.jpg"
        }
      ]     
    };

    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  // Concats a new contact array with the current contacts array and sets the current state to the new array

  addContact (newContact) {
    this.setState({contacts: this.state.contacts.concat([newContact])});
  }

  /* Firt confirms if the user wants to delete the contact, then filters out all contacts that do not 
     match the ID of the contact to delete and then sets the current state to the resulting array */

  deleteContact (deleteContact) {
    let confirmDelete = window.confirm('Are you sure you want to delete this contact?');
    if (confirmDelete) {
      this.setState({contacts: this.state.contacts.filter(item => item.id !== deleteContact.id)});
    }
  }

  // Sets up routes to each different component and passes it the props it requires

  render () {
    return (
      <Switch>
        <Route exact path='/contacts' render={() => (
          <ContactsList contacts={this.state.contacts} deleteContact={this.deleteContact} /> 
        )} />
        <Route path='/contacts/new' render={(props) => (
          <AddContact addContact={this.addContact} routerProps={props} />
        )} />
        <Route path='/contacts/:id' render={(props) => (
          <ContactInfo contacts={this.state.contacts} routerProps={props} />
        )} />
      </Switch>
    );
  }
}

export default Contacts;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsList from '../components/contactsList';
import AddContact from '../components/addContact';
import ContactInfo from '../components/contactInfo';

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
        }
      ]     
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact (newContact) {
    this.setState({contacts: this.state.contacts.concat([newContact])});
  }

  // Sets up routes to each different component and passes it the props it requires

  render () {
    return (
      <Switch>
        <Route exact path='/contacts' render={() => (
          <ContactsList contacts={this.state.contacts} /> 
        )} />
        <Route path='/contacts/new' render={props => (
          <AddContact addContact={this.addContact} routerProps={props} />
        )} />
        <Route path='/contacts/:id' render={props => (
          <ContactInfo contacts={this.state.contacts} routerProps={props} />
        )} />
      </Switch>
    );
  }
}

export default Contacts;
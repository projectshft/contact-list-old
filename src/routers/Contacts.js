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
          "imageURL": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
        }
      ]
    };
  }

  render () {
    return (
      <Switch>
          <Route exact path='/contacts' render={() => (
            <ContactsList contacts={this.state.contacts} /> 
          )} />
          <Route path='/contacts/new' render={props => (
            <AddContact routerProps={props} addContact={this.addContact} />
          )} />
          <Route path='/contacts/:id' render={props => (
            <ContactInfo routerProps={props} contacts={this.state.contacts} />
          )} />
        </Switch>
    );
  }
}

export default Contacts;
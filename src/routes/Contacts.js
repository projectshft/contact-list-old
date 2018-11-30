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

    // Fetch random contacts and setup state upon app initialization
    fetch('https://randomuser.me/api/?results=10&inc=name,picture,email,phone')
      .then(resp => resp.json())
      .then(myJson => {
        const contacts = myJson.results.map(contact => {
          return {
            name: `${contact.name.first} ${contact.name.last}`,
            email: contact.email,
            phone: contact.phone,
            image: contact.picture.large
          };
        });
        this.setState({contacts});
      });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/contacts' component={ContactList}></Route>
        <Route path='/contacts/new' component={NewContact}></Route>
        <Route path='/contacts/:id' component={Contact}></Route>
      </Switch>
    );
  }
}

export default Contacts;
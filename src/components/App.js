import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactsList from './ContactsList';
import AddContact from './AddContact';
import DetailView from './DetailView';

class App extends Component {
  state = {
    contacts: [
      // {
      //   id: 'abc-123',
      //   fname: 'John',
      //   lname: 'Doe',
      //   phone: '555-5555',
      //   email: 'john@doe.com',
      //   image_url: 'https://some-url@something.com'
      // },
      // {
      //   id: '456-xyz',
      //   fname: 'Jane',
      //   lname: 'Doe',
      //   phone: '555-5555',
      //   email: 'jane@doe.com',
      //   image_url: 'https://some-url@something.com'
      // },
      // {
      //   id: 'ale-930',
      //   fname: 'Little Johnny',
      //   lname: 'Doe',
      //   phone: '555-5555',
      //   email: 'liljohnny@doe.com',
      //   image_url: 'https://some-url@something.com'
      // },
      // {
      //   id: 'rce-424',
      //   fname: 'Little Janie',
      //   lname: 'Doe',
      //   phone: '555-5555',
      //   email: 'liljanie@doe.com',
      //   image_url: 'https://some-url@something.com'
      // }
    ]
  };

  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  }

  addContact = contact => {
    this.setState({ contacts: [...this.state.contacts, contact] });
    localStorage.setItem(
      'contacts',
      JSON.stringify([...this.state.contacts, contact])
    );
  };

  detailView = contact => {};

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/contacts"
            render={props => (
              <ContactsList
                {...props}
                contacts={this.state.contacts}
                detailView={this.detailView}
              />
            )}
          />
          <Route
            path="/contacts/new"
            render={props => (
              <AddContact {...props} addContact={this.addContact} />
            )}
          />
          <Route
            path="/contacts/:id"
            render={props => (
              <DetailView {...props} image_url={this.state.image_url} />
            )}
          />
          <Redirect to="/contacts" />
        </Switch>
      </div>
    );
  }
}

export default App;

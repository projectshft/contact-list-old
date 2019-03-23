import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactsList from './ContactsList';
import AddContact from './AddContact';
import DetailView from './DetailView';

class App extends Component {
  state = {
    contacts: []
  };

  // Added local storage just to help persist some data upon refresh

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')) || []
    });
  }

  addContact = contact => {
    this.setState({ contacts: [...this.state.contacts, contact] });
    localStorage.setItem(
      'contacts',
      JSON.stringify([...this.state.contacts, contact])
    );
  };

  deleteContact = e => {
    if (e.target.classList.contains('delete')) {
      console.log(e.target.id);
    }
  };

  // detailView = e => {
  //   if (!e.target.classList.contains('delete')) {
  //     this.props.history.push(`/contacts/${e.currentTarget.id}`);
  //   }
  // };

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
                deleteContact={this.deleteContact}
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
            render={() => <DetailView contacts={this.state.contacts} />}
          />
          <Redirect to="/contacts" />
        </Switch>
      </div>
    );
  }
}

export default App;

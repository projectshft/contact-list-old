import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Contacts from "./Contacts";
import AddContact from "./AddContact";
import ContactDetail from "./ContactDetail";
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 70219577,
          name: "Albert Einstein",
          image_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          email: "aeinstein@example.com",
          phone_number: "15555555555"
        },
        {
          id: 70219578,
          name: "Bob the coder",
          image_url:
            "https://whydoesitsuck.com/guys-its-true-coding-sucks/thumbnail.png",
          email: "bobn@example.com",
          phone_number: "1234567890"
        },
        {
          id: 70219570,
          name: "3rd dude",
          image_url:
            "https://i.kym-cdn.com/entries/icons/mobile/000/018/012/this_is_fine.jpg",
          email: "3rd@example.com",
          phone_number: "33333333"
        }
      ]
    };
    this.addContact = this.addContact.bind(this); //binding App to addContact
  }

  addContact(contact) {
    this.setState({ contacts: this.state.contacts.concat([contact]) }); //concats new contact to state
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/Contacts"
            render={props => (
              <Contacts {...props} contacts={this.state.contacts} />
            )}
          />
          <Route
            exact
            path="/Contacts/New"
            render={props => (
              <AddContact
                {...props}
                contacts={this.state.contacts}
                addContact={this.addContact}
              />
            )}
          />
          <Route
            exact
            path="/Contacts/:id"
            render={props => (
              <ContactDetail props={props} contacts={this.state.contacts} />
            )}
          />{" "}
          {/* Passing matched prop and contacts to ContactDetails */}
          <Redirect to="/Contacts" />
        </Switch>
      </div>
    );
  }
}

App.propTypes = { //unclear how to properly use PropTypes to benefit me here since the form is validating data.
  name: PropTypes.string,
  image_url: PropTypes.string,
  email: PropTypes.string,
  phone_number: PropTypes.number 
}

export default App;

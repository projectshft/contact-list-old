import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import ContactList from "./components/ContactList.js";
import "./App.css";
import NewContactForm from "./components/NewContactForm.js";
import ContactInfo from "./components/ContactInfo.js";

class App extends Component {
  constructor() {
    super();

    // initialize our basic state with contacts
    this.state = {
      contacts: [
        {
          id: 70219577,
          first_name: "Albert",
          last_name: "Einstein",
          image_url:
            "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTE5NTU2MzE2MjExMDg2ODU5/albert-einstein-sticking-out-his-tongue.jpg",
          email: "aeinstein@example.com",
          phone_number: "15555555555",
        },
        {
          id: 1234,
          first_name: "Lauren",
          last_name: "Donoghue",
          image_url:
            "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTE5NTU2MzE2MjExMDg2ODU5/albert-einstein-sticking-out-his-tongue.jpg",
          email: "aeinstein@example.com",
          phone_number: "15555555555",
        },
        {
          id: 34134,
          first_name: "Pierre",
          last_name: "Lourens",
          image_url:
            "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTE5NTU2MzE2MjExMDg2ODU5/albert-einstein-sticking-out-his-tongue.jpg",
          email: "aeinstein@example.com",
          phone_number: "15555555555",
        },
      ],
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    console.log("The contact being concatted is ", contact);
    this.setState({ contacts: this.state.contacts.concat([contact]) });
    console.log("The current state (after adding) is ", this.state.contacts);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          {/* Contact list is our de-facto homepage, too */}
          <Route
            exact
            path="/"
            render={() => <ContactList contacts={this.state.contacts} />}
          />

          <Route
            exact
            path="/contacts"
            render={() => <ContactList contacts={this.state.contacts} />}
          />
          <Route
            exact
            path="/contacts/new"
            render={(routerProps) => (
              <NewContactForm
                history={routerProps.history}
                contacts={this.state.contacts}
                addContact={this.addContact}
              />
            )}
          />

          <Route
            path="/contacts/:number"
            render={(routerProps) => (
              <ContactInfo
                contactId={parseInt(routerProps.match.params.number, 10)}
                contacts={this.state.contacts}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

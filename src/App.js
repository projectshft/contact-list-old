import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import ContactList from "./components/ContactList.js";
import "./App.css";
import NewContactForm from "./components/NewContactForm.js";
import ContactInfo from "./components/ContactInfo.js";

// styling
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  constructor() {
    super();

    // initialize our basic state with contacts
    this.state = {
      contacts: [
        {
          id: 70219577,
          name: "Albert Einsten",
          imageURL:
            "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTE5NTU2MzE2MjExMDg2ODU5/albert-einstein-sticking-out-his-tongue.jpg",
          email: "aeinstein@example.com",
          phoneNumber: "15555555555",
        },
        {
          id: 1234,
          name: "Lauren",
          imageURL:
            "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTE5NTU2MzE2MjExMDg2ODU5/albert-einstein-sticking-out-his-tongue.jpg",
          email: "aeinstein@example.com",
          phoneNumber: "15555555555",
        },
        {
          id: 34134,
          name: "Pierre",
          imageURL:
            "https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTE5NTU2MzE2MjExMDg2ODU5/albert-einstein-sticking-out-his-tongue.jpg",
          email: "aeinstein@example.com",
          phoneNumber: "15555555555",
        },
      ],
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    console.log("The contact being concatted is ", contact);
    this.setState({ contacts: this.state.contacts.concat([contact]) });
  }

  render() {
    return (
      <div className="App">
        <Container fluid="md" id="app-container">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Switch>
                {/* Contact list is our de-facto homepage, too */}
                <Route exact path="/" render={() => <ContactList contacts={this.state.contacts} />} />

                <Route exact path="/contacts" render={() => <ContactList contacts={this.state.contacts} />} />
                <Route
                  exact
                  path="/contacts/new"
                  render={(routerProps) => (
                    <NewContactForm history={routerProps.history} addContact={this.addContact} />
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

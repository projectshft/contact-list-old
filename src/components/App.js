import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
//import { sendEvent } from './State';
import PropTypes from 'prop-types';
//import './App.css';
import Contacts from './Contacts';
import ContactNew from './ContactNew';
import ContactView from './ContactView';
import ContactEdit from './ContactEdit';
import { sendEvent } from './State';

/* global gapi */

const API_KEY = 'AIzaSyBbojOOcY_Yd-spjKageHcLkCkRUbOh45k';
const CLIENT_ID = '810205621073-0ndqorhakqv5tbvjmtelde3fnsqr4l3l.apps.googleusercontent.com';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/people/v1/rest"];
const SCOPES = "https://www.googleapis.com/auth/contacts.readonly";


class App extends React.Component {

  constructor(props) {
    super(props)

    this.handleClientLoad = this.handleClientLoad.bind(this);
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
    this.handleAuthClick = this.handleAuthClick.bind(this);
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
    this.listConnectionNames = this.listConnectionNames.bind(this);
    this.loadApi = this.loadApi.bind(this);
    this.addContact = this.addContact.bind(this);
    //this.getContactById = this.getContactById.bind(this);

    this.state = {
      contacts: [],
      authBtnDisp: 'none',
      signOutBtnDisp: 'none'
    };
  }

  getContactById(contactId) {
    //console.log(contactId);
    const contact = this.props.contacts.find((contact) => { return contact.id === Number(contactId); });
    //console.log(contact);
    return contact; 
  }

  addContact(contact) {
    this.setState({ contacts: this.state.contacts.concat([contact]) });
  }

  // On load, called to load the auth2 library and API client library.
  handleClientLoad() {
    window.gapi.load('client:auth2', this.initClient);
  }

  initClient() {
    window.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      //this.listConnectionNames();
      //console.log(newContacts);

      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

      // Handle the initial sign-in state.
      this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());

    }, (error) => {
      console.log(JSON.stringify(error, null, 2));
    });
  }

  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      this.setState({ authBtnDisp: 'none' });
      this.setState({ signOutBtnDisp: 'block' });
      this.listConnectionNames();
    } else {
      this.setState({ authBtnDisp: 'block' });
      this.setState({ signOutBtnDisp: 'none' });
    }
  }

  handleAuthClick(event) {
    event.preventDefault();
    gapi.auth2.getAuthInstance().signIn();
  }

  handleSignoutClick(event) {
    event.preventDefault();
    gapi.auth2.getAuthInstance().signOut();
  }

  listConnectionNames() {
    const connectionsArray = [];
    gapi.client.people.people.connections.list({
      'resourceName': 'people/me',
      // 'pageSize': 20,
      'personFields': 'names,emailAddresses,phoneNumbers,photos',
    }).then((response) => {
      var connections = response.result.connections;
      if (connections.length > 0) {
        for (var i = 0; i < connections.length; i++) {
          var person = connections[i];
          var name = '';
          var email = '';
          var phone_number = '';
          var image_url = '';
          if (person.names && person.names.length > 0) {
            name = person.names[0].displayName;
          }
          if (person.emailAddresses && person.emailAddresses.length > 0) {
            email = person.emailAddresses[0].value;
          }
          if (person.phoneNumbers && person.phoneNumbers.length > 0) {
            phone_number = person.phoneNumbers[0].value;
          }
          if (person.photos && person.photos.length > 0) {
            image_url = person.photos[0].url;
          }

          var personObject = {
            name: name,
            email: email,
            phone_number: phone_number,
            image_url: image_url
          };
          connectionsArray.push(personObject);
          this.addContact(personObject);
          sendEvent('addContact', personObject);
        }
      } else {
        console.log('No connections found.');
      }
      //document.getElementById('array').innerHTML = JSON.stringify(connectionsArray);
      console.log(connectionsArray);

    });
    //this.setState({ contacts: connectionsArray }); //this.state.contacts.concat([connectionsArray])});
    return connectionsArray;
  }

  loadApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    script.onload = this.handleClientLoad;
    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadApi();
  }

  render() {
    const authDisp = this.state.authBtnDisp;
    const signOutDisp = this.state.signOutBtnDisp;

    return (
      <div className="App">
        <div className="row">
          <div className="col">
            <Link to="/">-Contacts-   </Link>
            <Link to="/new">-New Contact-   </Link>
          </div>
        </div>
        <div>
        <button id="authorize_button" style={{ display: authDisp }} onClick={this.handleAuthClick}> <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt=""/> Sign in with Google </button>
        <button id="signout_button" style={{ display: signOutDisp }} onClick={this.handleSignoutClick}> <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt=""/> Sign out of Google </button>
      </div>
        <Switch>
          <Route
            exact path='/'
            render={() => (
              <Contacts
                contacts={this.props.contacts}
              />
            )}
          />
          <Route
            path='/new'
            render={(props) =>
              <ContactNew
                props={props}
              />
            }
          />
          <Route
            exact path='/:id'
            render={(props) =>
              <ContactView
                // props={props}
                contact={this.getContactById(Number(props.match.params.id))}
                // contactId={props.match.params.id}
                // contacts={this.props.contacts}
              />
            }
          />
          <Route path='/:id/edit'
            render={(props) =>
              <ContactEdit
                props={props}
                contacts={this.props.contacts}
              />
            }
          />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default App; 
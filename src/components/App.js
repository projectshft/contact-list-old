import React from 'react';
import { Switch, Route } from 'react-router-dom';
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

// App manages all the Google Contacts API business and renders with routes for 
// the other four components. 

class App extends React.Component {

  constructor(props) {
    super(props)

    this.handleClientLoad = this.handleClientLoad.bind(this);
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
    this.handleAuthClick = this.handleAuthClick.bind(this);
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
    this.getGoogleContacts = this.getGoogleContacts.bind(this);
    this.loadApi = this.loadApi.bind(this);

    // State handles toggling of Google sign in/out buttons. 
    this.state = {
      authBtnDisp: 'none',
      signOutBtnDisp: 'none'
    };
  }

  // Function used to select the contact corresponding to the ':id' for the ContactView and 
  // ContactEdit routes on render (so the whole array of contacts isn't passed as a prop). 
  // (I'm not sure if this is a terrible practice but it seems to work fine.) 
  getContactById(contactId) {
    const contact = this.props.contacts.find((contact) => { return contact.id === Number(contactId); });
    return contact;
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
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

      // Handle the initial sign-in state.
      this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());

    }, (error) => {
      console.log(JSON.stringify(error, null, 2));
    });
  }

  // Update button displays and (if signed in) get Google Contacts. 
  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      this.setState({ authBtnDisp: 'none' });
      this.setState({ signOutBtnDisp: 'block' });
      this.getGoogleContacts();
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

  // For each connection, extract relevant values, create an object, and add the contact. 
  // (Note: this function would really benefit from refactoring with an array method.) 
  getGoogleContacts() {
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
          sendEvent('addContact', personObject);
        }
      } else {
        console.log('No connections found.');
      }
    });
  }

  // Appends script. 
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
        <div>
          <button className="btn btn-light" id="authorize_button" style={{ display: authDisp }} onClick={this.handleAuthClick}> <img src="https://img.icons8.com/color/25/000000/google-logo.png" alt="" /> Sign in with Google </button>
          <button className="btn btn-light" id="signout_button" style={{ display: signOutDisp }} onClick={this.handleSignoutClick}> <img src="https://img.icons8.com/color/25/000000/google-logo.png" alt="" /> Sign out of Google </button>
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
            component={ContactNew}
          />
          <Route
            exact path='/:id'
            render={(props) =>
              <ContactView
                contact={this.getContactById(props.match.params.id)}
              />
            }
          />
          <Route path='/:id/edit'
            render={(props) =>
              <ContactEdit
                {...props}
                contact={this.getContactById(props.match.params.id)}
              />
            }
          />
        </Switch>
      </div>
    );
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
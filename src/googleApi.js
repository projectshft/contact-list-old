// copy pasted from google.

import React from 'react';
import gapi from "./googleApiLibrary.js"
import { sendEvent } from './state';

const handleClientLoad = () => {
  // Loads the client library and the auth2 library together for efficiency.
  // Loading the auth2 library is optional here since `gapi.client.init` function will load
  // it if not already loaded. Loading it upfront can save one network request.
  gapi.load('client:auth2', initClient);
}

const initClient = () => {
  // Initialize the client with API key and People API, and initialize OAuth with an
  // OAuth 2.0 client ID and scopes (space delimited string) to request access.
  gapi.client.init({
      apiKey: 'AIzaSyDA9a9wBnhj7ZkNeDb-K7_PQOvS0B1smh4',
      discoveryDocs: ["https://people.googleapis.com/$discovery/rest?version=v1"],
      clientId: '679234371500-put517qiakaaj3ukfnp22imrnea81h6m.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/contacts.readonly'
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

const updateSigninStatus = (isSignedIn) => {
  // When signin status changes, this function is called.
  // If the signin status is changed to signedIn, we make an API call.
  if (isSignedIn) {
    makeApiCall();
  }
}

const handleSignInClick = (event) => {
  // Ideally the button should only show up after gapi.client.init finishes, so that this
  // handler won't be called before OAuth is initialized.
  gapi.auth2.getAuthInstance().signIn();
}

const handleSignOutClick = (event) => {
  gapi.auth2.getAuthInstance().signOut();
}

const makeApiCall = () => {
  gapi.client.people.people.connections.list({
    'resourceName': 'people/me',
    'personFields': 'names,emailAddresses,phoneNumbers'
  }).then(function(response) {
    var tempArray = response.result.connections;
    addContactBulk(tempArray);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
}

// this parsing is inefficient, and it breaks, but I could not find out the problem
// my google contacts has over 400 people, it breaks after a little over 100.
const addContactBulk = (contacts) => {
  contacts.forEach(function(contact){
    let newContact = {};
    if(contact['names'] !== null){
      newContact.name = contact.names[0].displayName;
    } else{
      newContact.name = "Unknown";
    };
    if(contact['phoneNumbers'] !== undefined){
      newContact.phoneNumber = contact.phoneNumbers[0].value;
    } else {
      newContact.phoneNumber = "N/A"
    };
    if(contact['emailAddresses'] !== undefined){
      newContact.email = contact.emailAddresses[0].value
    } else {
      newContact.email = "N/A"
    }
    // Didn't read the image url correctly from api, therefore setting image url to default.
    newContact.imageUrl = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png';
    sendEvent("addContact", newContact);
  })
}


export {
  handleSignInClick,
  handleClientLoad
}
    // <button id="signin-button" onclick="handleSignInClick()">Sign In</button>
    // <button id="signout-button" onclick="handleSignOutClick()">Sign Out</button>

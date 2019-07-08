import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { onUpdate, forceUpdate } from './components/State';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';


// *** NOTES ***
// Google Contacts API is used with read-only specified (read/write would have been nice).
// I would have liked to include an 'isGoogleContact' key (with a boolean value) for each
// contact so that when a user signs out, the 'synced' contacts would be removed from the state. 
// I might have encountered issues with authorization from 'http://localhost:3000/contacts/' 
// (something to do with the file path), so it may be necessary to sign in with Google from 
// 'http://localhost:3000' (but I can't recreate the issue -- it's working fine now -- so I'm 
// not sure that was the problem). 


// Cache the element the app will be rendering to.
const root = document.querySelector('#root');

// Use centralized state! 
onUpdate((state) => {
  ReactDOM.render((
    <BrowserRouter basename="/contacts">
      <App contacts={state.contacts} />
    </BrowserRouter>
  ), root);
});

// Trigger the initial update so the app will render for the first time.
forceUpdate(); 
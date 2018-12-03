import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';

/*
  This App should display the hard-coded contact list, and have the ability to add and delete contacts from the list. The edit functionality has not been implemented yet. The Model is maintained within the App component.
*/

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

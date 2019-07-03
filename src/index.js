import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import ContactList from './components/ContactList';



ReactDOM.render((
  <BrowserRouter>
    <ContactList />
  </BrowserRouter>
), document.getElementById('root'));

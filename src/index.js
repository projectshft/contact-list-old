// import React from 'react';
import { BrowserRouter, } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './components/App';

import { onUpdate, forceUpdate } from './state';

//use state.js onUpdate to create callback that renders App.
onUpdate(
  (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
});

forceUpdate();

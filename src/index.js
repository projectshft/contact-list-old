import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js'
import {onUpdate, forceUpdate, sendEvent, queryState} from './state'

const root = document.getElementById('root');

onUpdate((state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>,
    root
  );
});

// Trigger the initial update so our app will render for the first time.
forceUpdate();

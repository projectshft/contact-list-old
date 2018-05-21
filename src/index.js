import { BrowserRouter } from 'react-router-dom'
import { forceUpdate, onUpdate } from './state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

// When the state changes, re-render our app!
onUpdate((state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}/>
    </BrowserRouter>,root);
});

// Trigger the initial update so our app will render for the first time.
forceUpdate();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { onUpdate, forceUpdate } from './components/State';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';

// ReactDOM.render((
//   <BrowserRouter basename="/contacts">
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'));

// Cache the element the app will be rendering to.
const root = document.querySelector('#root');

// When the state changes, re-render the app.
onUpdate((state) => {
  ReactDOM.render((
    <BrowserRouter basename="/contacts">
    <App contacts={state.contacts}/>
    </BrowserRouter>
  ), root);
});

// Trigger the initial update so the app will render for the first time.
forceUpdate();
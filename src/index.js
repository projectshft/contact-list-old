import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { onUpdate, forceUpdate } from './state';
import Main from './components/main';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="container">
      <Main />
    </div>
  );
};

// TODO: add PropType validation

// Cache the element we'll be rendering to.
const root = document.querySelector('#root');

// When the state changes, re-render our app!
onUpdate((state) => {
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), root);
});

// Trigger the initial update so our app will render for the first time.
forceUpdate();

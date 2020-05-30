
import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App'




//Here we're giving the App component routing capability by wrapping in a BrowserRouter Component
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
)
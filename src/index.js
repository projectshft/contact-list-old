import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contacts from './components/contacts.js';
import New from './components/new.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import {Link} from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Main = () => (
    <main>
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/new" component={New} />
    {/* START HERE >>>>>NEST ROUTE FOR ID
    GIT COMMIT */}
      </Switch>
    </main>
  );

  export default Main;
  
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);


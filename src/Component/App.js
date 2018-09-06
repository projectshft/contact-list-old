import React from "react";
import {Component} from "react";
import {render} from 'react-dom';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import {Switch} from "react-router-dom";
import ContactRouter from './hardCodeData.js';
import Player from './hardCodeData.js';

class App extends Component {
  render() {
    return(
      
      <Router>
        <div>
          <ul>
            <li><Link to="/contacts"><h3>Contacts Index</h3></Link></li>
            <li><Link to= "/contact/New"><button>Add Contact</button></Link></li>
          </ul>

          <hr />
          <Switch>
            <Route path="/contacts/" component={ContactRouter} />
            <Route path="/contact/New" component={NewContact} />

          </Switch>
        </div>
      </Router>

    )
  }
};
//==============================================================================
//here is the the contact form

const NewContact = () => (
  <div>
    <h2>New Contact</h2>
    <div><input placeholder= "Name"></input></div>
    <div><input placeholder= "Image"></input></div>
    <div><input placeholder= "Email"></input></div>
    <div><input placeholder= "Phone Number"></input></div>
    <button>Submit</button>
  </div>
)




export default App;

import React, { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import ContactDetail from './components/ContactDetail';

//import ReactDom to use broswer router
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  //use Switch to ensure only one route renders at a time

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <h1>Contacts</h1>
            {/* each contact on the main route should be clickable; when clicked, it leads to a new route /counts/{the id of the contact} */}
            <Switch>
              <Route exact path="/contacts" component={Contacts}/>
              <Route exact path="/" component={Contacts} />
              <Route path="/contacts/new" component={AddContact}/>}
              {/* <Route path="/contacts/detail" component={ContactDetail}/> */} */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
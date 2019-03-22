import React, { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

//import ReactDom to use broswer router
//import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  //use Switch to ensure only one route renders at a time

  render() {
    return (
      //<BrowserRouter>
        <div className="App">
          <div className="container">
            {/* <Switch> */}
              {/* <Route path="/contacts" component={App}/> */}
              <h1>Contacts</h1>
              {/* clicking the addContact button  should take you a new route (/contacts/new) with a form for adding a new contact */}
              <div><img className="add-contact-icon" src="https://static.thenounproject.com/png/783652-200.png" alt="add user icon"></img></div>
              {/* <Route path="/contacts/new" component={AddContact}/> */}
              <AddContact />
              {/* each contact on the main route should be clickable; when clicked, it leads to a new route /counts/{the id of the contact} */}
              {/* <Route path="/contacts/:id" component={ContactDetail}> */}
              <Contacts />
            {/* </Switch> */}
          </div>
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;
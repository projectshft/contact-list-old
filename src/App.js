import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Contacts from './components/contacts'
import New from './components/new'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route exact path='/contacts' component={Contacts}/>
          <Route path='/contacts/new' component={New}/>
        </Switch>
      </main>
    );
  }
}

export default App;

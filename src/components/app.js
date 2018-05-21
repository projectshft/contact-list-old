import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './header';
import Home from './home';
import AddContact from './addContact';
import ContactView from './contactView';
import EditContact from './editContact';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-body">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/AddContact' component={AddContact}/>
            <Route exact path='/edit/:id' component={EditContact}/>
            <Route path='/:id' component={ContactView}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

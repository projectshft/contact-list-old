import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './index.css';
import { onUpdate, forceUpdate } from './state';
import FullContactList from './components/FullContactList';
import NewContact from './components/NewContact'


class App extends Component {

  render () {
    return (
      <Fragment>
      <Switch>
      <Route exact path = "/" render= { () => <Redirect to="/contacts" />}/>
      <Route exact path = "/contacts" component = {FullContactList}/>
      <Route path = "/contacts/new" component = {NewContact}/>
      </Switch>
      </Fragment>
    );
  };
}

onUpdate((state) => {
  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))});

forceUpdate();

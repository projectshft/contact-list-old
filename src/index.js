import React from 'react';
import ReactDOM from 'react-dom';
import {onUpdate, forceUpdate, sendEvent} from "./state.js";
import ContactList from "./components/contact-list.js";
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';
import ContactDetail from "./components/contact-detail.js"



class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ContactList} />
          <Route exact path="/contacts" component={ContactList} />
          <Route path="/contacts/:id" component={ContactDetail} />
        </Switch>
      </BrowserRouter>
    )
  }
}

onUpdate(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
})

forceUpdate();

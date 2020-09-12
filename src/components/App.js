// app component that will centralize all its children components
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import NewContact from './NewContact'



class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path ='/contacts' component={Home}/>
          <Route path="/contacts/new" component={NewContact}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

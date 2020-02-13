import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contacts from './Contacts'
import Contact from './Contact'
import NewContact from './NewContact'
import UpdateContactInfo from './UpdateContactInfo'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/contacts">
              <Contacts />
          </Route>
          <Route path="/contacts/add">
              <NewContact />
          </Route>
          <Route path="/contacts/update">
              <UpdateContactInfo />
          </Route>
          <Route path="/contacts/1">
              <Contact />
          </Route>
          <Route path="/">
              <Contacts />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;

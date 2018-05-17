import React from 'react'
import MainContacts from './mainContacts'
import Contact from './contact'
import {Switch, Route} from 'react-router-dom'

const Main = (props) => (
  <main>
    <Switch>
    <Route exact path="/"  render={() =>
        <MainContacts state={props.state} />}/>
      <Route path="/:id" render={(search) =>
          <Contact search={search}  stateHandler={props} />}/>
    </Switch>
  </main>
)

export default Main

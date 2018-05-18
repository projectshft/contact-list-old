import React from 'react'
import MainContacts from './mainContacts'
import Contact from './contact'
import {Switch, Route} from 'react-router-dom'

const Main = (props) => (
<div className="container">
  <div className="row">
    <main className="col">
      <Switch>
      <Route exact path="/"  render={() =>
        <MainContacts state={props.state} />}/>
      <Route path="/:id" render={(search) =>
            <Contact search={search}  stateHandler={props} />}/>
          </Switch>
    </main>
  </div>
</div>
)

export default Main

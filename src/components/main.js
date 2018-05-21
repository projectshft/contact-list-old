import React from 'react'
import MainContacts from './mainContacts'
import Contact from './contact'
import {Switch, Route} from 'react-router-dom'
//render (search) on line 13 passes in the match parameter methods. stateHandler passes in the state from state.js
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

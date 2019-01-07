import { Switch, Route } from 'react-router-dom'
import React from 'react';
import User from './User';
import NewUser from './NewUser';


const Roster = ({users, addUser}) => (
  <Switch>    
    <Route path='/user/new' render={(routerProps) => (
      <NewUser routerProps={routerProps} users={users} addUser={addUser} />
    )}/>
  
    <Route path='/roster/:number' render={(props) => (
      <User props={props} users={users} />
    )}/>
    
    {/* <Route path='/' render={() => (
      <FullRoster players={players} />
    )}/> */}
  </Switch>
)

export default Roster
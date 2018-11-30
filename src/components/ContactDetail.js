import { Switch, Route } from 'react-router-dom';
import React from 'react';


const Contact = ({props, players, editPlayer}) => {
  const player = _.find(players, { number: parseInt(props.match.params.number, 10) });
  return (
    <Switch>
      <Route exact path='/contacts/:id' component = {FullContact}/>
      <Route path='/contacts/:id/edit' component = {EditContact}/>
    </Switch>
  )

}

export default Player

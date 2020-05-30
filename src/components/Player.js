import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Player = ({playerId, players}) => {
  const player = _.find(players, { number: playerId });

  return (
    <div>
    <img src={player.image} width="250" height="250"></img>
    <h2>
      {player.name}
    </h2>
    <h4>Email:</h4> <p>{player.email}</p>
    <h4>Phone:</h4> <p>{player.phone}</p>
    <Link to="/">Back</Link>
    </div>
  )
}

export default Player

import { Link } from 'react-router-dom'
import React from 'react'

const FullRoster = ({players}) => (
  <div>
    <ul>
      {
        players.map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster

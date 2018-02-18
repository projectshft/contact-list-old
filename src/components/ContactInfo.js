import React from 'react'
import { Link } from 'react-router-dom'


export default (props) =>  (
  <div className="container">
    <h2>
    <Link to='/contacts'>Contacts</Link>
    </h2>
    User {props.match.params.id}
    <h3>Name: {props.location.state.name}</h3>
    <h3>email: {props.location.state.email}</h3>
    <h3>tel: {props.location.state.tel}</h3>
  </div>
)

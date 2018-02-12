import React from 'react'
import { Link } from 'react-router-dom'


export default (props) =>  (
  <div>
    <h2>
    <Link to='/contacts'>Contacts</Link>
    </h2>
    User {props.match.params.id}
    {console.log('Contact Info Props:', props)}
    {console.log(props.info)}
    <h3>Name: {props.location.state.name}</h3>
    <h3>email: {props.location.state.email}</h3>
    <h3>tel: {props.location.state.tel}</h3>
  </div>
)

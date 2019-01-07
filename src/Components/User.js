import  { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'
//have 

const User =  ({props, users}) => {
  const user = _.find(users, { number: parseInt(props.match.params.id, 10) });
  
    if (!user) {
      return <div>Sorry, but the user was not found</div>
    }
    return (
      <div>
        <h1>{user.name} - {user.id})</h1>
        <h2>Email: {user.email}</h2>
        <h3>Phone Number: {user.phone_number}</h3>
        <Link to='/userlist'>Back</Link>
      </div>
    )
  }
  
  export default User
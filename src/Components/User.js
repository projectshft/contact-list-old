import  { Link } from 'react-router-dom'
import React from 'react'

const User =  ({props, users}) => {
    const user = _.find(users, { number: parseInt(props.match.params.number, 10) });
  
    if (!user) {
      return <div>Sorry, but the user was not found</div>
    }
    return (
      <div>
        <h1>{user.name} (#{user.id})</h1>
        <h2>Email: {user.email}</h2>
        <Link to='/userlist'>Back</Link>
      </div>
    )
  }
  
  export default User
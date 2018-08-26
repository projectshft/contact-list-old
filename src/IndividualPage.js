import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const IndividualPage = ({props, contactList}) => {
  const individualPage = _.find(contactList, {id: parseInt(props.match.params.id, 10 )});

    return (
      <div>
        <h1>Name: {individualPage.name}</h1>
        <h2>Phone Number: {individualPage.phone}</h2>
        <h2>Address: {individualPage.address}</h2>
        <h2>Email: {individualPage.email}</h2>
        <Link to ='/Contacts'>Back</Link>
      </div>
    )
}

export default IndividualPage

//Why aren't you linking??? Something to do with props maybe

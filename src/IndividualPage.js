import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const IndividualPage = ({props, contactList}) => {
  const individualPage = _.find(contactList, {id: props.match.params.id});

    return (
      <div>
        <h1>Name: {props.individualPage.name}</h1>
        <h2>Phone Number: {props.individualPage.phone}</h2>
        <h2>Address: {props.individualPage.address}</h2>
        <h2>Email: {props.individualPage.email}</h2>
        <Link to ='/Contacts'>Back</Link>
      </div>
    )
}
export default IndividualPage

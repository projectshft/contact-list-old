import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({ contactID, people }) => {
    const person = _.find(people, { id: contactID });

    if (!person) {
        return <div>Sorry, but the person was not found
            <div><Link to='/contacts'>Back</Link></div>
        </div>
    }
    return (
        <div>
            <img src="{person.imgURL}" />
            <h1>{person.name} (#{person.id})</h1>
            <h2>Phone Number: {person.phone_number}</h2>
            <h2>Email: {person.email}</h2>
            <div><Link to='/contacts'>Back</Link></div>
        </div>
    )
}

export default Contact
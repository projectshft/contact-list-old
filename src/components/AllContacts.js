import { Link } from 'react-router-dom'
import React from 'react'

const AllContacts = ({people}) => (
  <div className="d-flex" >
    <ul className="list-inline mx-auto justify-content-center">
      {
        people.map(person => (
            // adding the key p.id allows us to view their unique contact page 
          <li key={person.id}>
            <Link to={`/contacts/:${person.id}`}>{person.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AllContacts
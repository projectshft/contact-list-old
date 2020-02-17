import { Link } from 'react-router-dom'
import React from 'react'

const AllContacts = ({people}) => (
  <div className="d-flex" >
    <ul className="list-inline mx-auto justify-content-center">
      {
        people.map(p => (
            // adding the key p.id allows us to view their unique contact page 
          <li key={p.id}>
            <Link to={`/contacts/${p.id}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AllContacts
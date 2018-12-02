import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import ContactAPI from './ContactAPI.js';



const AllContacts = () => (
  <div>
    <ul>
      {
        ContactAPI.all().map(p => (
          <li key={p.email}>
            <Link to={`/contacts/${p.email}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AllContacts;

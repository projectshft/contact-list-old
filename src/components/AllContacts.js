import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import ContactAPI from './ContactAPI.js';

const AllContacts = ({ props, contacts }) => (

<div>
<h1>Contacts </h1><Link to="/contact/new"><button>Add Contact</button></Link>
    <div>
      <ul>
        {
          contacts.map(p => (
            <li key={p.name}>
              <Link to={`/contact/${p.id}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
</div>
)
export default AllContacts;

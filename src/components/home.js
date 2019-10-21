import React from 'react';
import { Link } from 'react-router-dom'

const Home = ({contacts}) => (
  <div>
    <h1>Welcome to My Rolodex</h1>
    <div>
        <h2>Contacts</h2>
        <div>
          <ul>
            {
              contacts.map(c => (
              <li key={c.id}>
              <Link to={`/contact/${c.id}`}>{c.name}</Link>
              </li>
              ))
            }
          </ul>
        </div>
        <Link to={`/contact/new`}><button>Add A Contact</button></Link>
    </div>
  </div>
)

export default Home
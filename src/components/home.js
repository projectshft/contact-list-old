import React from 'react';
import { Link } from 'react-router-dom'

const Home = ({contacts}) => (
  <div>
    <h1>Welcome to My Rolodex</h1>
    <div>
      <div style={{display : 'inline-block'}}>
        <h2>Contacts</h2> <Link to={`/contact/new`}><button>Add A Contact</button></Link>
      </div>
        <div>
          <ul>
            {
              contacts.map(c => (
              <p key={c.id}>
              <Link to={`/contact/${c.id}`}>{c.name}</Link><Link to='/'>  Edit</Link><Link to='/'>  Delete</Link>
              </p>
              ))
            }
          </ul>
        </div>
    </div>
  </div>
)

export default Home
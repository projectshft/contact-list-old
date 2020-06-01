import {Link} from 'react-router-dom'
import React from 'react'

const ContactList = ({contacts}) => (
  <div>
    <h2 className='col'>Contacts</h2>
    <Link className='col' to='/contact/new'><button>Add Contact</button></Link>

    <br></br>
    <br></br>
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
        <h5><Link to={`/contact/${c.id}`}>{c.name}</Link></h5><Link><button>edit</button></Link> <Link><button>delete</button></Link>
        </li>
      ))}
    </ul>
  </div>
)

export default ContactList

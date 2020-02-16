import { Link } from 'react-router-dom'
import React from 'react'

const ContactList = ({contacts, deleteContact}) => (
  <div>
    <table>
    <tbody>
      {
        contacts.map(c => (
          <tr key={c.id}>
            <td><Link to={`/contact/${c.id}`}>{c.name }</Link></td>
         
            <td><Link to ={`/contact/${c.id}/edit`}><button>Edit</button></Link></td>
            
            <td><button onClick={() => deleteContact(c.id)}>Delete</button></td>
            
          </tr>
        ))
      }
    </tbody>
    </table>
  </div>
)

export default ContactList

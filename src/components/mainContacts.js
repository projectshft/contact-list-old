import React from 'react';
import {Link} from 'react-router-dom';
import {sendEvent} from '../state'

const MainContacts = (props) =>{
  const handleDelete = (id, name) => {
    if(window.confirm(`Do you really want to delete ${name}?`)){
    sendEvent('deleteContact', null, id)
    }
  }

return (
  <div>
    <ul>
    {props.state.contacts.map(p => (
      <li key={p.id}>
         {p.name} <img src={p.image_url}/> {p.email} {p.phone_number} <Link to={`/${p.id}`}>Edit</Link> <strong onClick={() => handleDelete(p.id, p.name)}> Delete </strong>
      </li>
    ))
  }
   <Link to={`/${props.state.ID}`}><button>New Contact</button> </Link>
  </ul>
</div>

)
}

export default MainContacts;

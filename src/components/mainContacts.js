import React from 'react';
import {Link} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import {sendEvent} from '../state'

const MainContacts = (props) =>{
  const handleDelete = (id, name) => {
    if(window.confirm(`Do you really want to delete ${name}?`)){
    sendEvent('deleteContact', null, id)
    }
  }

return (
  <div className='card card-body bg-light'>
    <ul>
    <CSSTransitionGroup
    transitionName="test"
    transitionAppear={true}
    transitionAppearTimeout={400}
    transitionEnter={true}
    transitionLeave={true}>
    {props.state.contacts.map(p => (
      <li key={p.id} className="border">
         {p.name} <img src={p.image_url}/> {p.email} {p.phone_number} <Link to={`/${p.id}`}>Edit</Link> <strong onClick={() => handleDelete(p.id, p.name)}> Delete </strong>
      </li>
    ))
  }
   <Link to={`/${props.state.ID}`}><button className="mt-4">New Contact</button> </Link>
   </CSSTransitionGroup>
  </ul>
</div>

)
}

export default MainContacts;

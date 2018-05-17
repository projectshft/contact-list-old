import React from 'react';
import {Link} from 'react-router-dom';

const MainContacts = (props) => (
  <div>
    <ul>
    {props.state.contacts.map(p => (
      <li key={p.id}>
        <Link to={`/${p.id}`}> {p.name}</Link> <img src={p.image_url}/> {p.email} {p.phone_number}
      </li>
    ))
  }
  </ul>
</div>

)

export default MainContacts;

import React, { Component } from 'react';

const ContactList = () => (
  <div>
    <ul>
      {
        state.all().map(p => (
          <li key={p.id}>
            <Link to={`/roster/${p.id}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default ContactList

import { Link } from 'react-router-dom';
import React from 'react';

// Renders list of contacts on home page
const ContactsList = (props) => (
  <div>
    {
      props.contacts.map(c => (
        <div key={c.number} className="contact">
          <div className="row justify-content-center">
            <h3>{c.name}</h3>
          </div>
          <div className="row justify-content-end">
            <Link className="btn btn-info" to={`/${c.number}`}>edit</Link>
            <button className="btn btn-danger" onClick={() => props.removeContact(c)} id={c.number}>delete</button>
          </div>
          <hr/>
        </div>
      ))
    }
  </div>
)

export default ContactsList;

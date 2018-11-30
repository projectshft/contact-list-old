import React, {Fragment} from 'react';

const ContactList = ({routerProps, contacts}) => (
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">eContacts</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/contacts/new">Add Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container mt-5">
      {contacts.map(c => {
        return (
          <ul className="contact-list list-group" key={c.id}>
            <li className="contact list-group-item my-2">
              <h3 className='contact-name'>{c.name}</h3>
              <a href={`/contacts/${c.id}`} className="btn btn-sm btn-primary mx-2">Details</a>
            </li>
          </ul>
        );
      })}
    </div>
  </Fragment>
);

export default ContactList;
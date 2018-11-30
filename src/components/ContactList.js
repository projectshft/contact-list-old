import React from 'react';

const ContactList = () => (
  <div className="container-fluid">
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
    <h1>CONTACTS PAGE</h1>
  </div>
);

export default ContactList;
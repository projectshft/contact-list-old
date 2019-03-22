import React from 'react';
import { Link } from 'react-router-dom'


//Header that will have the title and add contact button
const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-dark mb-3 py-0'>
      <div className="container">
        <a href="/" className="navbar-brand">Mariel's Contacts</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to="/addContact">
              <i className="fas fa-user-plus fa-fw"></i>
            </Link>
            <Link to="/">
              <i className="fas fa-home" href="/"></i>
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import React from 'react';


const Header = () => (
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </ul>
  </nav>
)

export default Header;

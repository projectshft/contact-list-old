import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='container'>
    <div className='row'>
      <h1>Contacts</h1>
      <Link to='/contacts/new'><button className='btn btn-primary'>Add Contact</button></Link>
    </div>
  </div>
);

Header.propTypes = {
  addContact: PropTypes.func
};

export default Header;
import React from 'react';
import { PropTypes } from 'prop-types';

const Header = () => (
  <div className='container'>
    <div className='row'>
      <h1>Contacts</h1>
      <button className='btn btn-primary'>Add Contact</button>
    </div>
  </div>
);

Header.propTypes = {
  addContact: PropTypes.func
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ContactsList from './ContactsList';
import { PropTypes } from 'prop-types';

const Rolodex = ({contacts}) => (

      <div>
        <Header />
        <ContactsList contacts={contacts} />
        <Link to='/'>exit</Link>
      </div>
   
);

Rolodex.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func
};

export default Rolodex;
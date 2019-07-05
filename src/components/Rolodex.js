import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ContactsList from './ContactsList';
import { PropTypes } from 'prop-types';

const Rolodex = ({contacts, removeContact}) => (

      <div>
        <Header />
        <ContactsList contacts={contacts} removeContact={removeContact} />
        <Link to='/'>exit</Link>
      </div>
   
);

Rolodex.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func
};

export default Rolodex;
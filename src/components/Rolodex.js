import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ContactsList from './ContactsList';

const Rolodex = (props) => (
  <div>
    <Header />
    <ContactsList contacts={props.contacts} />
    <Link to='/'>exit</Link>
  </div>
);

export default Rolodex;
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import ContactsList from './ContactsList';
import Contact from './Contact';

const Rolodex = ({contacts, addContact, editContact}) => (

      <div>
        <Header />
        <ContactsList contacts={contacts} />
        <Link to='/'>exit</Link>
      </div>
   
);

export default Rolodex;
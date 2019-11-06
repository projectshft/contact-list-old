
import React from 'react';
import ContactTable from './Contact';
import { Link } from 'react-router-dom';

const ListofContacts = ({contacts}) => (
  <div className="container">
      <div className="row">
       
          <h2>Contacts</h2>
          <table className='table table-hover'>
            <tbody>
            {contacts.map(contact => (
              <ContactTable key={contact.name} contact={contact}/>
              
              ))}
            </tbody>
          </table>
        </div>
        
          <button className='btn'>
            <Link to='/contacts/new'>Add Contact</Link></button>

            <br>
            </br>
            
            <button className='btn'>
            <Link to='/'>Go Home</Link></button>
        </div>
     
    
  )

export default ListofContacts
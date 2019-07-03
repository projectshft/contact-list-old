import React from 'react';
import Contact from './Contact';

const ContactsList = (props) => {
  const contactItems = props.contacts.map((contact) => {
    return (
      <Contact contact={contact} />
    )
  });

  return (
    <table className='table table-hover'>
      <tbody>
        {contactItems}
      </tbody>
    </table>
  )
};

export default ContactsList;
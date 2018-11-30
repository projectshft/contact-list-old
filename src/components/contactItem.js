import React from 'react'

const ContactItem = ({contact}) => {
console.log(contact)
  return (

    <div className="contact-list-item">
      <img src={contact.imgUrl} className="contact-list-img" />
      <h3 className="name">{contact.firstName} {contact.lastName}</h3>
      <p>email:{contact.email}</p> <p># - {contact.phone}</p>
      
    </div>
  )
}

export default ContactItem


import React, { Component } from 'react'
import Contact from './Contact'

//generate a random ID number for all contacts
const generateId = () => Math.round(Math.random() * 100000000)

//Full list of all contacts
class ContactList extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: generateId(),
          name: 'Barry Obama',
          email: 'b-bama@gmail.com',
          phone: '222-222-2222',
          img_url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg' 
        },
        {
          id: generateId(),
          name: 'RBG',
          email: 'rbg@gmail.com',
          phone: '444-444-4444',
          img_url: 'https://www.lawcrossing.com/images/articleimages/Notorious-RBG-Big.jpg' 
        },
        {
          id: generateId(),
          name: 'Taylor Swift',
          email: 'tswift@gmail.com',
          phone: '000-000-0000',
          img_url: 'https://pixel.nymag.com/imgs/daily/vulture/2018/07/06/06-taylor-swift-1.w330.h330.jpg' 
        }
      ]
    };

  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact =>
          <Contact 
          key={contact.id}
          name={contact.name} 
          email={contact.email} 
          phone={contact.phone} 
          img={contact.img_url}
          />
        )}
      </div>
    )
  }
}

export default ContactList

import React, { Component } from 'react';


function ContactList() {
  const contacts = [
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555"
    },
    {
      id: 70219578,
      name: "Homer Simpson",
      image_url: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
      email: "homer@compuglobalhypermeganet.com",
      phone_number: "9395550113"
    },
    {
      id: 70219579,
      name: "Ghostbusters Inc.",
      image_url: "https://upload.wikimedia.org/wikipedia/en/e/ee/Ghostbusters_logo.svg",
      email: "pvenkmann@ghostbusters.com",
      phone_number: "1234567890"
    }
  ]

  const contactList = contacts.map(contact => <h2>{contact.name}</h2>)
    return <div>{contactList}</div>

}


export default ContactList;

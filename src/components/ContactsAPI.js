import React from 'react';
import ReactDOM from 'react-dom';

const ContactsAPI = {
  "contacts": [
    {
      "id": 70219574,
      "name": "Albert Einstein I",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg",
      "email": "aeinstein1@example.com",
      "phone_number": "15555555555"
    },
    {
      "id": 70219573,
      "name": "Albert Einstein II",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg",
      "email": "aeinstein2@example.com",
      "phone_number": "15555525555"
    },
    {
      "id": 70219572,
      "name": "Albert Einstein III",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg",
      "email": "aeinstein3@example.com",
      "phone_number": "15555355555"
    }
  ],
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = contact => contact.id === id;
    return this.contacts.find(isContact);
  }
};

export default ContactsAPI;

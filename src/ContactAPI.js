import { render } from 'react-dom';
import React, { BrowserRouter, Switch, Route, Link,  Component } from 'react';
import Contact from './Contact.js';
import Contacts from './Contacts.js';
import Header from './Header.js';
import Home from './Home.js';
import Main from './Main.js';


const ContactAPI = {
  contacts: [
    {
    name: "Albert Einstein",
    image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    email: "aeinstein@example.com",
    phone_number: "15555555555"
  },
  {
    name: "Winston Churchill",
    image_url: "https://en.wikipedia.org/wiki/Winston_Churchill#/media/File:Sir_Winston_Churchill_-_19086236948.jpg",
    email: "wchurchill@example.com",
    phone_number: "15555555556"
  }
],
all: function() { return this.contacts},
  get: function(id) {
    const isContact = p => p.name === id
    return this.contacts.find(isContact)
  }
}

export default ContactAPI;

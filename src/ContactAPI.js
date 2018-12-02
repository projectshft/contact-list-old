import { render } from 'react-dom';
import React from 'react';
import Contacts from './Contacts.js';



class ContactAPI extends React.Component {
  render(){
    return(
  Contacts: [
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
]
);
}
}


export default ContactAPI;

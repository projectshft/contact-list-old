import React from "react";
import Contact from "./contact";

const ContactList = () => (
  <div>
    <ul>
      {CONTACTS_DATA.contacts.map(c => (
        <Contact key={c.id} contactData={c} />
      ))}
    </ul>
  </div>
);

const CONTACTS_DATA = {
  contacts: [
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url:
        "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555"
    }
  ]
};

export default ContactList;

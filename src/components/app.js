import React, { Component } from "react";

const App = () => (
  <div>
    <Header />
    <ContactList />
  </div>
);

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Contact List</h1>
  </header>
);

const ContactList = () => (
  <div>
    <ul>
      {CONTACTS_DATA.contacts.map(c => (
        <Contact key={c.id} contactData={c} />
      ))}
    </ul>
  </div>
);

const Contact = props => {
  return (
    <li>
      <span>
        {props.contactData.name} - {props.contactData.email}
      </span>
      <hr />
    </li>
  );
};

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

export default App;

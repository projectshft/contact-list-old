

//
// function ContactList() {
//
// // Each contact has an id (randomly generated), name, image, email, and phone number.
//
//   const contacts = [
//     {
//       id: generateId(),
//       name: "Albert Einstein",
//       image_url: "https://i.pinimg.com/236x/95/8f/7a/958f7acae61910da05f327a38eb63530--innovation-design-imagination.jpg",
//       email: "aeinstein@example.com",
//       phone_number: "15555555555"
//     },
//     {
//       id: generateId(),
//       name: "Homer Simpson",
//       image_url: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
//       email: "homer@compuglobalhypermeganet.com",
//       phone_number: "9395550113"
//     },
//     {
//       id: generateId(),
//       name: "Ghostbusters Inc.",
//       image_url: "https://upload.wikimedia.org/wikipedia/en/e/ee/Ghostbusters_logo.svg",
//       email: "pvenkmann@ghostbusters.com",
//       phone_number: "1234567890"
//     }
//   ]
//
// // This is how the contact list will render on the page. Currently has a huge image but everything shows up!
//   const contactList = contacts.map(contact =>
//     <h2><img src={contact.image_url}/>
//     <br />
//       {contact.name}
//     <br />
//       {contact.email}
//     <br />
//       {contact.phone_number}
//     <br />
//       <h4>
//         Edit  |  Delete
//       </h4>
//       ===========================================
//     </h2>
//
//
//
//   )
//     return <div className="list-item">
//       <p>
//         {contactList}
//       </p>
//     </div>
//
// }
//
//
// export default ContactList;

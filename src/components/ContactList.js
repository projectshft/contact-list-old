// import React, { Component } from 'react';

// class TODOContactList extends Component {
//   render() {
//     return <div>TODO</div>;
//   }
// }
// export default TODOContactList;
/******************************
   A class-based component for the contact list, to hold the state of all the individual contacts. (An object that has individual contacts with the id, name, image, email, and phone number for each.)
   Loop through the individual contact components and output a specific individual contact component for each entry in the list.  
   * ***************************/
import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  // // A constructor to build/hold the state.
  // constructor() {
  //   // When you have a constructor, and you have a parent, and you're extending something, you want to call the "super()" method.
  //   super();
  // this.state = {
  // But in this case a constructor isn't needed. If you need it for some kind of initialization or something like that, then you would do it this way. But if you're using your constructor only to create state
  state = {
    // contactList is an array of objects (individual contacts)
    contactList: [
      {
        id: 1,
        name: 'Mike Trout',
        image_url: '#',
        email: 'trout@gmail.com',
        phone: '1-800-homerun'
      },
      {
        id: 2,
        name: 'Chris Rock',
        image_url: '#',
        email: 'crock@gmail.com',
        phone: '1-800-fun-naay'
      },
      {
        id: 3,
        name: 'Charles Mingus',
        image_url: '#',
        email: 'mingus@gmail.com',
        phone: '1-800-fat-bass'
      },
      {
        id: 4,
        name: 'Patty Smith',
        image_url: '#',
        email: 'PattySmith@gmail.com',
        phone: '1-800-hip-poet'
      }
    ]
  };
  /**********************************************
    Loop through the individual contact components and output a specific individual contact component for each entry in the list, then insert the properties through the object. 
    **********************************************/
  render() {
    // Use destructuring via curly braces to pull contacts out.
    const { contactList } = this.state;

    return (
      <div>
        {/* map through the contactList for  */}
        {contactList.map(contact => (
          // Render the following items for each contact.
          // <h1>{contact.name}</h1>
          // <ContactLits takes in properties
          <Contact
            key={contact.id}
            name={contact.name}
            image_url={contact.image_url}
            email={contact.email}
            phone={contact.phone}
            // Instead of passing in individual fields, pass in the whole contact(which comes from "contact" within the map method).
            // contact={contact}
          />
        ))}
      </div>
    );
  }
}

export default ContactList;

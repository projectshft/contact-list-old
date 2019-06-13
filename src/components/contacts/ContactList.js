/******************************
   A class-based component for the contact list, to hold the state of all the individual contacts. (An object that has individual contacts with the id, name, image, email, and phone number for each.)
   Loop through the individual contact components and output a specific individual contact component for each entry in the list.  
   * ***************************/
import React, { Component } from 'react';
import Contact from './Contact';
// Import Consumer from context.js
// import { Consumer } from '../context';

class ContactList extends Component {
  // // A constructor to build/hold the state.
  // constructor() {
  //   // When you have a constructor, and you have a parent, and you're extending something, you want to call the "super()" method.
  //   super();
  // this.state = {
  // But in this case a constructor isn't needed. If you need it for some kind of initialization or something like that, then you would do it this way. But if you're using your constructor only to create state, you can do it thusly:
  state = {
    // contactList is an array of objects (individual contacts)
    contactList: [
      {
        id: 1,
        name: 'Charles Mingus',
        image_url: '#',
        email: 'mingus@gmail.com',
        phone: '1-800-fat-bass'
      },
      {
        id: 2,
        name: 'Patty Smith',
        image_url: '#',
        email: 'PattySmith@gmail.com',
        phone: '1-800-hip-poet'
      },
      {
        id: 3,
        name: 'Mike Trout',
        image_url: '#',
        email: 'trout@gmail.com',
        phone: '1-800-homerun'
      },
      {
        id: 4,
        name: 'Chris Rock',
        image_url: '#',
        email: 'crock@gmail.com',
        phone: '1-800-fun-naay'
      }
    ],
    all: function() {
      return this.contactList;
    },
    get: function(id) {
      const isContact = c => c.id === id;
      return this.contactList.find(isContact);
    }
  };

  // Define deleteContact
  deleteContact = id => {
    console.log(
      'Delete click passed to ContactList. ContactList state accessed'
    );
    console.log('id is: ', id);
    // To delete, take the contacts from the state (use destructuring):
    const { contactList } = this.state;
    // Use filter to establish a new contact list without the deleted contact
    const newContactList = contactList.filter(contact => contact.id !== id);
    // Set the state of the contact list to the new copy of the contact list
    this.setState({ contactList: newContactList });
  };
  /**********************************************
    Loop through the individual contact components and output a specific individual contact component for each entry in the list, then insert the properties through the object. 1:1, so use the high-order "map" method. 
    **********************************************/
  render() {
    // Use destructuring via curly braces to pull contacts out.
    const { contactList } = this.state;

    return (
      <div>
        {/* The above div isn't necessary, since it's carrying no extra info/instructions. Can be replaced with:
        <React.Fragment> */}
        <div className="row justify-content-center">
          <h1 className="display-4 mb-3">
            <strong>
              <span className="text-dark">Contacts</span>
            </strong>
          </h1>
        </div>
        {/* map through the contactList for  */}
        {contactList.map(contact => (
          // Render the following items for each contact.
          // <h1>{contact.name}</h1>
          // <ContactList takes in properties
          <Contact
            key={contact.id} // To placate webpack's demand for a unique identifier
            id={contact.id} // this should be key={contact.id}? but the value isn't getting passed/accessed, where as it is in id={contact.id}. Maybe just use contact={contact}, as below?
            name={contact.name}
            image_url={contact.image_url}
            email={contact.email}
            phone={contact.phone}
            // Instead of passing in individual fields, pass in the whole contact(which comes from "contact" within the map method).
            // contact={contact}
            /*********************************
              // SEE SECTION 4
              ***************************** */
            //  Pass deleteClickHandler (from Contact) as prop
            // deleteClickHandler={this.deleteContact}
            // Bind deleteClickHandler to contact id
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
      // Per above, this div isn't necessary, can be replaced with </React.Fragment>
    );
  }
}

export default ContactList;

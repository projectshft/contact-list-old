import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Contact from './contact';
import ContactList from './ContactList'

const Home = (props) => (
  // console.log(contacts),
  console.log(props),
  <Switch>
    <Route path='/contacts/:id' render={() => (
      <Contact props={props} key={props.id} updateSelectedContact={props.updateSelectedContact}/>
    )}/>

    <Route path='/contacts' render={() => (
      <ContactList contacts={props.contacts} updateSelectedContact={props.updateSelectedContact}/>
    )}/>
  </Switch>
)

// const Home = (props) => {
//   const contactList = props.contacts.map((contact, index) => {
//     return (
//       <Contact contact={contact} key={index} updateSelectedContact={props.updateSelectedContact}/>
//     )
//   })
//
//   return (
//     <div>
//     <header className="App-header">
//       <h1 className="App-title">Recontact</h1>
//     </header>
//     <p/>
//
//     <Link to='/contacts/new'>Add New Contact</Link>
//     <p/>
//
//     <div className="contacts">
//       {contactList}
//     </div>
//     </div>
//   )
// }

export default Home

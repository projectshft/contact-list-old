// import React, { Component } from "react";
// import { Switch, Route, Link } from 'react-router-dom'
// import '../node_modules/bootstrap'
// import './App.css'
//
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {contacts: [
//       { number: 1, name: "Albert Einstein",
//       imageUrl: "http://www.deism.com/images/Einstein_laughing.jpeg",
//       email: "Al@Einstein.com", phone: "555-555-1111" },
//       { number: 2, name: "Joe Schmoe",
//       imageUrl: "https://pbs.twimg.com/profile_images/72371547/joe.schmoe_400x400.jpg",
//       email: "Joe@Schmoe.com", phone: "555-555-2222" },
//       { number: 3, name: "Jack Slacker",
//       imageUrl: "https://goodmenproject.com/wp-content/uploads/2011/02/slacker.jpg",
//       email: "Jack@Slacker.com", phone: "555-555-3333" },
//       { number: 4, name: "Willy Wonka",
//       imageUrl: "https://i.pinimg.com/736x/24/f4/81/24f481d367f720c5abac3c030488e2f6--willy-wonka-gene.jpg",
//       email: "William@Wonka.com", phone: "555-555-4444" },
//       { number: 5, name: "Guy Random",
//       imageUrl:"https://static1.fjcdn.com/comments/Heres+a+random+guy+_18bfb66ce6b020189f6b697fe36dc44a.jpg",
//       email: "Random@guy.com", phone: "555-555-5555" },
//       { number: 6, name: "Nikola Tesla",
//       imageUrl: "https://www.thefamouspeople.com/profiles/images/nikola-tesla-2.jpg",
//       email: "Nik@acpower.com", phone: "555-555-6666" }
//     ]}
//   }
//
//   addContact (contact) {
//     this.setState({contacts: this.state.contacts.concat([contact])});
//   }
//
//   editContact (contact, idNumber) {
//     //locate correct contact with idNumber and then update values with contact.
//   }
//
//
//   render() {
//     return (
//   //Does App need to have its state defined as ContactAPI.contacts?
//       <div>
//         <Main />
//       </div>
//     )
//   }
// }
//
// const Main = () => (
//   <main>
//     <Switch>
//       <Route path='/contacts' component={Contacts}/>
//     </Switch>
//   </main>
// )
//
// const Contacts = () => (
//   <Switch>
//     <Route path='/contacts/:number/edit' component={EditContact}/>
//     <Route path='/contacts/:number' component={Person}/>
//     <Route path='/contacts/add' conponent={EditContact}/>
//     <Route exact path='/contacts' component={ContactList}/>
//
//
//   </Switch>
// )
//
// const ContactList = () => (
//   <div>
//   <h1>Contacts</h1>
//     <ul>
//       {
//         ContactAPI.all().map(p => (
//           <li key={p.number}>
//             <Link to={`/contacts/${p.number}`}>{p.name}</Link>
//             <Link to={`/contacts/${p.number}/edit`}>Edit</Link>
//           </li>
//         ))
//       }
//       <Link to={`/contacts/add`}>Add New</Link>
//     </ul>
//   </div>
// )
//
// const Person = (props) => {
//   const person = ContactAPI.get(
//     parseInt(props.match.params.number, 10)
//   )
//
//   if (!person) {
//     return <div>Sorry, but the contact was not found.</div>
//   }
//   return (
//     <div>
//       <h1>{person.name}</h1>
//       <img src={person.imageUrl} alt={person.name} className="profile-pic"></img>
//       <h3>Name: {person.name}</h3>
//       <h3>Email: {person.email}</h3>
//       <h3>Phone: {person.phone}</h3>
//       <Link to='/contacts'>Back</Link>
//     </div>
//   )
// }
//
// class EditContact extends Component {
//
//   constructor(props) {
//     super(props);
//     const person = ContactAPI.get(
//       parseInt(props.match.params.number, 10)
//     )
//     //set state to current contact info.
//     this.state = {
//       number: person.number,
//       name: person.name,
//       imageUrl: person.imageUrl,
//       email: person.email,
//       phone: person.phone
//     };
//   }
//
//   render() {
//     return (
//       <div className="container">
//         <form id="myForm" onSubmit={event => this.handleSubmit(event)}>
//           <div className="row">
//
//             <div className="col">
//               <label htmlFor="name">Name: </label>
//               <label htmlFor="image-url">Image Url: </label>
//               <label htmlFor="email">Email: </label>
//               <label htmlFor="phone">Phone: </label>
//             </div>
//
//             <div className="col">
//               <input
//                 id="idNumber"
//                 defaultValue={this.state.number}
//               />
//               <input
//                 id="name"
//                 defaultValue={this.state.name}
//                 onChange={event => this.setState({name: event.target.value})}
//               />
//               <input
//                 id="image-url"
//                 defaultValue={this.state.imageUrl}
//                 onChange={event => this.setState({imageUrl: event.target.value})}
//               />
//               <input
//                 id="email"
//                 defaultValue={this.state.email}
//                 onChange={event => this.setState({email: event.target.value})}
//               />
//               <input
//                 id="phone"
//                 defaultValue={this.state.phone}
//                 onChange={event => this.setState({phone: event.target.value})}
//               />
//               <button type="form-group" onClick={this.onSubmit}>Save</button>
//             </div>
//
//           </div>
//         </form>
//       </div>
//     );
//   }
//
//   handleSubmit(event) {
//     event.preventDefault()
//     const newState = this.state
//     const idNumber = newState.number
//     if(!idNumber) {
//     this.props.addContact(newState);
//   } else {
//     this.props.editContact(newState, idNumber)
//   }
//     // finish this for the rest of the values and setState.
//       // then send the state data back to the ContactAPI.set(newState, idNumber)
//
//     // const name = event.target.name.value;
//     // console.log(name);
//     // const imageUrl = event.target.imageUrl
//     // console.log(event.target);
//
//   }
//
// }
//
//
// }
//
// const ContactAPI = {
//   contacts: [
//     { number: 1, name: "Albert Einstein",
//     imageUrl: "http://www.deism.com/images/Einstein_laughing.jpeg",
//     email: "Al@Einstein.com", phone: "555-555-1111" },
//     { number: 2, name: "Joe Schmoe",
//     imageUrl: "https://pbs.twimg.com/profile_images/72371547/joe.schmoe_400x400.jpg",
//     email: "Joe@Schmoe.com", phone: "555-555-2222" },
//     { number: 3, name: "Jack Slacker",
//     imageUrl: "https://goodmenproject.com/wp-content/uploads/2011/02/slacker.jpg",
//     email: "Jack@Slacker.com", phone: "555-555-3333" },
//     { number: 4, name: "Willy Wonka",
//     imageUrl: "https://i.pinimg.com/736x/24/f4/81/24f481d367f720c5abac3c030488e2f6--willy-wonka-gene.jpg",
//     email: "William@Wonka.com", phone: "555-555-4444" },
//     { number: 5, name: "Guy Random",
//     imageUrl:"https://static1.fjcdn.com/comments/Heres+a+random+guy+_18bfb66ce6b020189f6b697fe36dc44a.jpg",
//     email: "Random@guy.com", phone: "555-555-5555" },
//     { number: 6, name: "Nikola Tesla",
//     imageUrl: "https://www.thefamouspeople.com/profiles/images/nikola-tesla-2.jpg",
//     email: "Nik@acpower.com", phone: "555-555-6666" }
//   ],
//   all: function() {return this.contacts},
//   get: function(idNumber) {
//
//     const isContact = p => p.number === idNumber
//     return this.contacts.find(isContact)
//   },
//   // add: function(newContact) {
//   //
//   //   //maybe refactor this function to take two arguments. The first (newState) would be required.
//   //   ///the second (idNumber) would only be used to change the state of an existing contact.
//
//   //*********UPDATE: this function was refactored below as "set".
//
//   //   this.contacts.push({
//   //       number: this.contacts.length + 1,
//   //       name: newContact.name,
//   //       imageUrl: newContact.imageUrl,
//   //       email: newContact.email,
//   //       phone: newContact.phone
//   //   })
//   // },
//   set: function(newState, idNumber) {
//     console.log(newState);
//     console.log(idNumber);
//     if (!idNumber) {
//       const name = newState.Name
//       const imageUrl = newState.imageUrl
//       const email = newState.email
//       const phone = newState.phone
//       this.contacts.push({
//         number: this.contacts.length + 1,
//         name, imageUrl, email, phone
//       })
//     } else {
//       this.setState({contacts: newState})
//       // contact.name = name
//       // contact.imageUrl = imageUrl
//       // contact.email = email
//       // contact.phone = phone
//       // console.log(contact);
//     }
//     // if I realize that I need to give App state, I need to setState here.
//   }
// }
//
//
//
// export default App;

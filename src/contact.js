import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact by ID</h1>
        <Link to={`/home`}>
          <button>Back to Contact List</button>
        </Link>
      </div>
    );
  }
}

export default Contact;

//     constructor(props) {
//       super(props)

//       this.state = {
//         contacts: props.contacts,
//         currentContact: {}
//       };
//     }

//     render() {
//         return (
//           <div>

//           <h1 className="app-title">Contacts</h1>

//             <div className="container">
//             <div>

//               <br />
//               <input //this form on new route /contacts/new
//                 type="text"
//                 placeholder="Add Contact"
//                 value={this.state.newContact}
//                 onChange={e => this.updateInput("newContact", e.target.value)}
//               />
//               <button //on click, take user to new route with an adding contact form
//                 className="add-btn btn-floating"
//                 onClick={() => this.addContact()}
//                 disabled={!this.state.newContact.length}
//               >
//                 <i class="material-icons"> Add Contact </i>
//               </button>
//               <br /> <br />
//               <ul>
//                 {this.state.contacts.map(contact => {
//                   return (
//                     <li key={contact.id}>
//                       {contact.value}
//                       <button className="btn btn-floating" onClick={() => this.deleteContact(contact.id)}>
//                         <i class="material-icons">x</i>
//                       </button>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           </div>
//         );
//       }
//     }

//     export default Contact;

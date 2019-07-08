import React from 'react'
import Contact from './contact'

const ContactsList = (props) => {
  const contactItems = props.contacts.map((contact, index) => {
    return (
      <Contact key={index} contact={contact} />
    )
  })

  return (
    <ul className='col-md-4 list-group'>
      {contactItems}
    </ul>
  )
}

export default ContactsList











//??Messed arround with state here. 

 // class ContactsList extends Component {
//   state = {
//     contacts: [
//       {name:"KyleK", email: "Kyle@gmail.com", age: 29},
//       {name:"Stella", age: 3},
//     ],
//     title: "Contact Info"
//   };

//   //create an add contact button which adds a new contact on the array of contacts. 
//   addContact = () => {
//     this.setState
//   }
//   render() {
//     return (
//       <div>
//         <h3>Contacts Here</h3>
//         <button onClick ={this.addContact}>Add contact</button>
//         <Contact name={this.state.contacts[0].name}>Kyle!</Contact>
//       </div>

//     );
//   }
// }

// export default ContactsList;
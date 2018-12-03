import React from 'react'
import Header from './Header.js'
import ContactListItem from './Contact-List-Item'
import PropTypes from 'prop-types'


const ContactList = ({contacts}) => {
  /*the below conditional is left over from my original plans to make
  the app have a delete contact functionality, however I ran out of time 
  so commented it out with plans to potentially implement in the future */

    // if (contacts.length  === 0) {
    //   return (
    //     <div>
    //       <Header />
    //       <div className="jumbotron">
    //         <p>Oh no, this list is empty! Please add a contact using the 'Add Contacts' button above</p>
    //       </div>
    //     </div>
    //   )
    // }
    
    const Contacts = contacts.map((contact) => {
      return (
        <ContactListItem key={contact.id} contact={contact}/>
      )
    })
    
    return (
      <div>
        <Header />
        <ul className="list-group container container-fluid">
          {Contacts}
          </ul>
        {/* <Contact-List-Item contacts={props}/>  */}
      </div>
    )
}



export default ContactList


//type validation to confirm that the name field has been filled out
//console logs and error otherwise. All other parameters are optional
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    id: PropTypes.number.isRequired,
    phoneNumber: PropTypes.string,
    image: PropTypes.string
  }))
};
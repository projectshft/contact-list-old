import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Contact from './Contact'
import NewContact from './NewContact'
import UpdateContactInfo from './UpdateContactInfo'
import ContactList from './ContactList'

export default function Contacts(props) {

  let sample = [
        { number: 1, name: "Ben Blocker", phone: "444-333-2211", email: "test@gmail.com", img_url: " empty " },
        { number: 2, name: "Tim Smith", phone: "444-333-2211", email: "test@gmail.com", img_url: " empty " },
      ]
	const [contacts, setContacts] = useState(sample);
  // const [name, setName] = useState('Mary')
  // const [surname, setSurname] = useState('Poppins')

  // useEffect(() => {
  //   document.title = name + ' ' + surname;
  // });
  // function loadSample() {
  // 	setContacts(c => c.concat(sample));
  // }

  // useEffect(() => {
  //   loadSample();
  // });

  // function handleNameChange(e) {
  //   setName(e.target.value)
  // }

  // function handleSurnameChange(e) {
  //   setSurname(e.target.value)
  // }

  return (
    <div>
        <Switch>
          <Route path="/contacts/add">
              <NewContact />
          </Route>
          <Route path="/contacts/update">
              <UpdateContactInfo />
          </Route>
          <Route path="/contacts/2">
              <Contact />
          </Route>
          <Route path='/contacts' render={() => (
			<ContactList contacts={contacts} />
			)}/>
        </Switch>

    </div>
  )
};

// class Contacts extends React.Component {
//   render() {
//     return (
//       <div>
//       	Contacts Main
//       </div>
//     )
//   }
// }

// export default Contacts;
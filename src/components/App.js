import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import 'typeface-roboto';
import Contacts from './Contacts'
import ContactList from './ContactList'

export default function App(props) {

  return (
    <div className="App">
    <Switch>
      <Route path="/" render={() => (
  			<Contacts/>
  			)}/>
      </Switch>
    </div>
  )
};

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route exact path="/contacts">
//               <Contacts />
//           </Route>
//           <Route path="/contacts/add">
//               <NewContact />
//           </Route>
//           <Route path="/contacts/update">
//               <UpdateContactInfo />
//           </Route>
//           <Route path="/contacts/1">
//               <Contact />
//           </Route>
//           <Route path="/">
//               <Contacts />
//           </Route>
//         </Switch>
//       </div>
//     )
//   }
// }

// export default App;

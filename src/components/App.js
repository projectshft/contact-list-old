import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Contacts from './Contacts'

export default function App(props) {


  return (
    <section>
        <Switch>
          <Route exact path="/contacts">
              <Contacts />
          </Route>

          <Route path="/">
              <Contacts />
          </Route>
        </Switch>
    </section>
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

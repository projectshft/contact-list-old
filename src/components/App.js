import { Switch, Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import AddContact from './AddContact';
// import Header from './Header';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {
          id: 123,
          name: "Jane Eyre",
          email: "lonelyorphan@lowoodschool.edu",
          phone: "12865559830",
          image: "./images/jane_eyre.jpg"
        },

        {
          id: 456,
          name: "Edward Rochester",
          email: "sirmoody@thornfield.com",
          phone: "16765552548",
          image: "./images/mr_rochester.jpg"
        },

        {
          id: 789,
          name: "Bertha Mason",
          email: "crazywife@theattic.net",
          phone: "12375559372",
          image: "./images/mrs_rochester.jpg"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path={[ '/', '/contacts' ]} component={ Home } />
          <Route path='/contacts/new' component={ AddContact } />
          {/* <Route path='/contacts/:id' component={ ContactDetail }/> */}
        </Switch>
      </div>
    )
  }
}



export default App

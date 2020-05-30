import React, { Component } from 'react';//this will not be a static page
import { Switch, Route, Link } from 'react-router-dom';
import AddContacts from './NewContact';
import Contacts from './Contacts';
import Home from './Home';

class App extends Component {
  constructor () {
    super ()
  this.state = {
    contacts: [
      { id: 1, name: 'Commander Shepard', image_url: 'image', phone: '555-5555', email: 'something@something'},
      { id: 2, name: 'Garrus Vakarian', image_url: 'image', phone: '555-5555', email: 'something@something'},
      { id: 4, name: 'Thane Krios', image_url: 'image', phone: '555-5555', email: 'something@something'},

    ],
  }

      }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contacts' componend={Contacts}/>
          </Switch>
        </div>
      </div>

    )
  }
}




export default App;

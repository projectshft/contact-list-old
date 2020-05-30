import React, { Component } from 'react';//this will not be a static page
import { Switch, Route, Link } from 'react-router-dom';
import AddContacts from './add-contact';
import ContactInfo from './contact-info';
import Contacts from './contacts';

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

            <Route exact path="/" component={Contacts} />
            <Route path="/contacts/new" component={AddContacts} />
          </Switch>
        </div>
      </div>

    )
  }
}




export default App;

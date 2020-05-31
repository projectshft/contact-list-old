import { Switch, Route } from 'react-router-dom';
import React from 'react';
import ContactRoutes from './ContactRoutes';
import Contacts from './Contacts';



class App extends React.Component {
  constructor () {
    super()

    this.state = { //default contacts that will load automatically
      contacts: [
        { id: 1, name: 'Commander Shepard', image_url: 'https://live.staticflickr.com/6046/6259129421_f3ca1b72d5_b.jpg', phone_number: '555-5555', email: 'something@something'},
        { id: 2, name: 'Garrus Vakarian', image_url: 'https://vignette.wikia.nocookie.net/masseffect/images/3/36/Garrus_Character_Shot.png/revision/latest/top-crop/width/360/height/360?cb=20100323054855', phone_number: '555-5555', email: 'something@something'},
        { id: 4, name: 'Thane Krios', image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/ThaneKriosME2.jpg/220px-ThaneKriosME2.jpg', phone_number: '555-5555', email: 'something@something'},
      ]
    }

    this.addContact = this.addContact.bind(this);//binds the addContacts function to the contacts state
    this.deleteContact = this.deleteContact.bind(this);//binds deleteContacts function to this state
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
    // console.log('Click')
  }

//function set in parent component that will be passed down to delete individual contacts.
  deleteContact (contactId) {
    // console.log(contactId)
    const contacts = this.state.contacts.filter(contact => contact.id !== contactId);
    this.setState({contacts: contacts})
    // const items = this.state.items.filter(item => item.id !== contact);
    // this.setState({ items: items });
  }

  render() {
    //returns a route to the two main pages, home and ContacteRouts (where the contact information is passed down and handled)
    //The ContactRoute component inherits the contacts state and the addContacts function as parameters
    return (


      <div className="row" id="main">
        <div className="col-md-8 offset-md-2">
          <div className="container">

            <br/>

            <Switch>
              <Route exact path='/' render={() => (
                <ContactRoutes addContact={this.addContact} deleteContact={this.deleteContact} contacts={this.state.contacts} />
              )}/>
              <Route path='/contacts' render={() => (
                <ContactRoutes addContact={this.addContact} deleteContact={this.deleteContact} contacts={this.state.contacts} />
              )}/>

            </Switch>
          </div>
        </div>
      </div>
    )
  }
}


export default App

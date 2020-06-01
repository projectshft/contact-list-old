import { Switch, Route } from 'react-router-dom';
import React from 'react';
import ContactRoutes from './ContactRoutes';


class App extends React.Component {
  constructor () {
    super()

    this.state = { //default contacts that will load automatically
      contacts: [
        { id: 1, name: 'Darth Vader', image_url: 'https://boygeniusreport.files.wordpress.com/2015/08/darth-vader.jpg?quality=70&strip=all', phone_number: '797-565-7832', email: 'dvader@thedeathstar.com'},
        { id: 2, name: 'Kylo Ren', image_url: 'https://images-na.ssl-images-amazon.com/images/I/61nRsmNnVzL._AC_SL1023_.jpg', phone_number: '867-2346-8865', email: 'kren@knightsofren.net'},
        { id: 4, name: 'Boba Fett', image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/FettbobaJB.png/220px-FettbobaJB.png', phone_number: '456-5642-5673', email: 'thefettman@sarlaacpit.org'},
      ]
    }

    this.addContact = this.addContact.bind(this);//binds the addContacts function to the contacts state
    this.deleteContact = this.deleteContact.bind(this);//binds deleteContacts function to this state
    this.editContact = this.editContact.bind(this); //binds editContact function to this state
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

  }

  editContact (contactId) {
    const contacts = this.state.contacts.findIndex(contact => contact.id === contactId )
    // let newArray = [...this.state.contacts]
    // TODO
    console.log(contacts)
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
                <ContactRoutes addContact={this.addContact} deleteContact={this.deleteContact} editContact={this.editContact} contacts={this.state.contacts} />
              )}/>
              <Route path='/contacts' render={() => (
                <ContactRoutes addContact={this.addContact} deleteContact={this.deleteContact} editContact={this.editContact} contacts={this.state.contacts} />
              )}/>


            </Switch>
          </div>
        </div>
      </div>
    )
  }
}


export default App

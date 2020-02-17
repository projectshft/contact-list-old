import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home';
import ContactsList from './components/contactsList'
import uuid from 'uuid/v4'

//the main App comoponent with state
class App extends React.Component {
  constructor () {
    super()

    //default data and the state object
    this.state = {
    contacts: [
      { id: uuid(), name: "Bette Porter", image_url: "https://d.newsweek.com/en/full/1551134/where-are-l-word-original-cast-members-now.webp?w=737&f=5ead8c86e76979240be7c1028060e955", email:'bette_porter@gmail.com', phone:'5555555555'},
      { id: uuid(), name: "Alice Pieszecki", image_url: "http://cdn03.cdn.justjared.com/wp-content/uploads/2019/12/lword-sonep/the-l-word-generation-q-cast-celebrate-season-premiere-22.jpg", email:'Alice@AlicePieszecki.com', phone:'8582184605' },
      { id: uuid(), name: "Shane McCuthcheon", image_url: "http://cdn04.cdn.justjared.com/wp-content/uploads/2019/12/lword-sonep/the-l-word-generation-q-cast-celebrate-season-premiere-19.jpg", email:'thebestinLA@gmail.com', phone:'2146421596' }
    ]
  }

    this.addContact = this.addContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

//when a need contact is added in ContactNew it gets added to the contacts array in the state
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

//when you edit the contact this function updates the new contacts
  updateContact (contact) {
    const newContacts = this.state.contacts.map((c) => {
      if (contact.id === c.id)
      {c = contact;}

      return c;
    });

    this.setState({contacts: newContacts});
  }
//Filters the array for everything but the contact that was clicked
  deleteContact (contactId) {

    const items = this.state.contacts.filter(item => item.id !== contactId);
    this.setState({ contacts: items });
    }


  render() {

    return (
      <div>
        {/* Routes between the index page and the /contacts*/}
        <Switch>
            <Route exact path = '/' component={Home}/>
            {/* passes the specific prop types to the ContactList component*/}
            <Route path = '/contacts' render={() => (
              <ContactsList contacts={this.state.contacts} updateContact={this.updateContact} addContact={this.addContact} deleteContact={this.deleteContact} />
            )}/>

          </Switch>
        </div>

    )
  }
}

export default App

import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import ContactLanding from './ContactLanding'
import AddContact from './AddContact'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {
          id: 100000001,
          name: 'JimBob McFlanigan',
          image_url: 'https://vignette.wikia.nocookie.net/southpark/images/7/77/Rednecks-jim-bob.png',
          email: 'jimbob@jim.bob',
          phone_number: '+1 919-919-1919'
        },
        {
          id: 100000002,
          name: 'Sterling Archer',
          image_url: 'https://cdn-images-1.medium.com/max/1200/0*MBbFTmYOojEXNhMI.png',
          email: 'sterling@isis.net',
          phone_number: '+1 271-000-6969'
        }
      ]
    }
    
    this.addContact = this.addContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }
  
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
    console.log(this.state.contacts);
  }

  editContact(contact){
    this.setState({contacts: this.state.contacts.map((c) => c.id === contact.id ? Object.assign({},c,contact) : c)});
    console.log(this.state.contacts);
  }
  

  render() {
    return (
      <div className='container main-app'>
        <div className='row'>
        <Switch>
          <Route exact path='/' render={() => (
            <Redirect to='/contacts' />
          )}/>
          <Route path='/contacts' render={() => (
            <ContactLanding addContact={this.addContact} editContact={this.editContact} contacts={this.state.contacts} />
          )}/>
          <Route path='contacts/new' render={() => (
            <AddContact contacts={this.state.contacts} addContact={this.addContact} />
          )}/>
        </Switch>
        </div>
      </div>
    )
  }
}

export default App

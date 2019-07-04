import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import ContactLanding from './ContactLanding'

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
          name: 'Aaron Hayslip',
          image_url: '',
          email: 'aaron@projectshift.io',
          phone_number: '+1 888-888-8888'
        },
        {
          id: 100000003,
          name: 'Sterling Archer',
          image_url: 'https://cdn-images-1.medium.com/max/1200/0*MBbFTmYOojEXNhMI.png',
          email: 'sterling@isis.net',
          phone_number: '+1 271-000-6969'
        },
        {
          id: 100000004,
          name: 'Rick Sanchez',
          image_url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/58089103/r_m_sauce.0.jpg',
          email: 'pickle@rick.rick',
          phone_number: '+1 303-121-1337'
        }
      ]
    }
    
    this.addContact = this.addContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }
  
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
    
  }

  editContact(contact){
    this.setState({contacts: this.state.contacts.map((c) => c.id === contact.id ? Object.assign({},c,contact) : c)});
    
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
          
        </Switch>
        </div>
      </div>
    )
  }
}

export default App

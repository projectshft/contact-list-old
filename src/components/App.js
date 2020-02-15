import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import ContactLanding from './ContactLanding'

class App extends React.Component {
  constructor () {
    super()
//Hard Code some Data for testing and visual aesthetic purposes
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Reese Witherspoon',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Reese_Witherspoon_at_TIFF_2014.jpg/440px-Reese_Witherspoon_at_TIFF_2014.jpg',
          email: 'reese@youwish.com',
          phone_number: '+1 212-308-1212'
        },
        {
          id: 2,
          name: 'Tim Cook',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tim_Cook_2009_cropped.jpg',
          email: 'tim@apple.com',
          phone_number: '+1 212-308-1963'
        },
        {
          id: 3,
          name: 'Bill Gates',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Bill_Gates_2014.jpg',
          email: 'bill@microsoft.com',
          phone_number: '+1 202-309-1963'
        },
        {
          id: 4,
          name: 'Mark Zuckerberg',
          image_url: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/02/03/7ffc02a0-432a-11ea-9fd9-ecfbb38a9743_image_hires_115830.jpeg?itok=Ukyns5sn&v=1580702317',
          email: 'Mark@facebook.com',
          phone_number: '+1 202-380-1551'
        },
        {
          id: 5,
          name: 'Jeff Bezos',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos%2C_May_5%2C_2016_%281%29_%28cropped%29.jpg/440px-Secretary_of_Defense_Ash_Carter_meets_with_Jeff_Bezos%2C_May_5%2C_2016_%281%29_%28cropped%29.jpg',
          email: 'jeff@amazon.com',
          phone_number: '+1 202-901-1512'
        }
      ]
    }
    
    this.addContact = this.addContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }
  
  addContact (contact) {
    this.setState(
      {contacts: this.state.contacts.concat([contact])}
    );
  }

  editContact(contact){
    this.setState({
      contacts:
        this.state.contacts.map((c) => c.id === contact.id ? Object.assign({},c,contact) : c)
      })
  }

  removeContact(contactId) {
    this.setState({
      contacts: this.state.contacts.filter((c) => c.id !== contactId)
    })
  }
  
  render() {
    return (
      <div className='container main-app'>
        <div className='row'>
        <Switch>
          <Route exact path='/'
            render={() => (
              <Redirect to='/contacts' />
            )}
          />
          <Route path='/contacts'
            render={() => (
              <ContactLanding
                addContact={this.addContact}
                editContact={this.editContact}
                removeContact={this.removeContact}
                contacts={this.state.contacts}
              />
            )}
          />
        </Switch>
        </div>
      </div>
    )
  }
}

export default App
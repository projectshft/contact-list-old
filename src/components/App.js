import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Contacts from './Contacts';




class App extends React.Component {
  constructor () {
    super()
    this.state = {
      contactList: [
        {
          id: 1,
          name: 'Sir PumperNickle Junior',
          image_url: 'https://pixel.nymag.com/imgs/daily/vulture/2017/11/27/27-lil-pump.w700.h700.jpg',
          email: 'lilPump@gmail.com',
          phone_number: '305-274-2834'
        }
      ]
  }
  this.addContact = this.addContact.bind(this);
}

addContact(contact) {
  this.setState({contactList: this.state.contactList.concat([contact])})
}


  render() {
    return (
      <div>
        <Switch>
          <Route path='/contacts' render={() => (
            <Contacts addContact={this.addContact} contactList ={this.state.contactList} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App

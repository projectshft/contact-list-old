import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Contacts from './Contacts';




class App extends React.Component {
  constructor () {
    super()
//set preloaded contacts
    this.state = {
      contactList: [
        { key: 1,
          name: 'Pump',
          image_url: 'https://pixel.nymag.com/imgs/daily/vulture/2017/11/27/27-lil-pump.w700.h700.jpg',
          email: 'lilPump@gmail.com',
          phone_number: '305-274-2834'},
        { key: 2,
          name: 'Sir PumperNickle Junior4',
          image_url: 'https://pixel.nymag.com/imgs/daily/vulture/2017/11/27/27-lil-pump.w700.h700.jpg',
          email: 'lilPump@gmail.com',
          phone_number: '305-274-2834'}
      ]
  }
  //bind the addContact's function 'this' to the App's this
  this.addContact = this.addContact.bind(this);
}
//takes in a contact from CreateContact component and then adds it to the array of contacts in the state
addContact(contact) {
  this.setState({contactList: this.state.contactList.concat([contact])})
}


  render() {
    return (
      <div>
        <Switch>
        //setting route for url to '/path
          <Route path='/contacts' render={() => (
            //onnce the rout is set to /contacts the app goes to the Contacts component
            <Contacts addContact={this.addContact} contactList ={this.state.contactList} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App

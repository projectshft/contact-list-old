import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Contacts from './Contacts';
import CreateContact from './CreateContact';



class App extends React.Component {
  constructor () {
    super()
    this.state = {
      contactList: [
        {
          'id': 1,
          'name': 'Sir PumperNickle Junior',
          'image_url': 'https://pixel.nymag.com/imgs/daily/vulture/2017/11/27/27-lil-pump.w700.h700.jpg',
          'email': 'lilPump@gmail.com',
          'phone_number': '305-274-2834'
        }
      ]
  }
}

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/contacts' component={Contacts}/>
          <Route exact path='/contacts/new' component={CreateContact} />
        </Switch>
      </div>
    )
  }
}

export default App

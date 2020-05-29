import { Switch, Route } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Home from './Home';
import AddContact from './AddContact';
// import Header from './Header';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      "contacts": [
        {
          "id": 70219577,
          "name": "Albert Einstein",
          "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "aeinstein@example.com",
          "phone_number": "15555555555"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path={[ '/', '/contacts' ]} component={ Home } />
          <Route path='/contacts/new' component={ AddContact } />
          {/* <Route path='/contacts/:id' component={ ContactDetail }/> */}
        </Switch>
      </div>
    )
  }
}

export default App

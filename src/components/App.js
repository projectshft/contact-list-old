import { Switch, Route } from 'react-router-dom'
import React from 'react';


class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
          { name: 'Pam Halpert', phone: 8582164505, email: 'pamhalpert@dundermifflin.com', image: 'https://images-cdn.9gag.com/photo/azXy2QK_460s.jpg', key: 88199}
        ]
      }
    }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contacts' render={() => (
            <ContactsList addContact={this.addContact} contacts={this.state.contacts} updateContact={this.updateContact} removeContact={this.removeContact}/>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App;

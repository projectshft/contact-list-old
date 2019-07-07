import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import ContactList from './Contact-List'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {id: generateId(), name: 'Albert Einstein', image_URL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg', email: 'm.c.Squared@gmail.com', phoneNumber: '910-123-4567', quote: '"If you cant explain it simply, you dont understand it well enough."' },
        {id: generateId(), name: 'Hank Hill', image_URL: 'https://vignette.wikia.nocookie.net/kingofthehill/images/0/0e/Hank.png/revision/latest/scale-to-width-down/185?cb=20150524012905', email: 'propane_LUVR@hotmail.com', phoneNumber: '919-373-9874', quote: '"Taste the meat, not the heat."' },
        {id: generateId(), name: 'Prison Mike', image_URL: 'https://ih0.redbubble.net/image.69481766.1262/ap,550x550,12x16,1,transparent,t.u1.png', email: 'WorldsBestBoss.dunderMiff@gmail.com', phoneNumber: '919-828-5476', quote: '"Dont ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where youve been, ever, for any reason whatsoever."'  },
      ]
    }

    this.addContact = this.addContact.bind(this);
  }

  addContact (contact){
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Contact-List' render={() => (
            <Roster addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App

import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      players: [
        { id: 1, image: 'https://gasmonkeygarage.com/wp-content/uploads/2016/10/Richard.jpg', name: 'Richard Rawlings', email: 'rrawlings@gasmonkeygarage.com', phone: '1234567890' },
        { id: 2, image: 'https://gasmonkeygarage.com/wp-content/uploads/2016/10/Jason0319.jpg', name: 'Jason Aker', email: 'jaker@gasmonkeygarage.com', phone: '0987654321' },
        { id: 3, image: 'https://gasmonkeygarage.com/wp-content/uploads/2016/10/MikeCoy0319.jpg', name: 'Mike Coy', email: 'mcoy@gasmonkeygarage.com', phone: '5678901234' },
        // { number: 4, name: "Matt Midfielder", position: "M" },
        // { number: 5, name: "William Winger", position: "M" },
        // { number: 6, name: "Fillipe Forward", position: "F" }
      ]
    }

    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer (player) {
    this.setState({players: this.state.players.concat([player])});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/roster' render={() => (
            <Roster addPlayer={this.addPlayer} players={this.state.players} />
          )}/>
          <Route path='/schedule' component={Schedule}/>
        </Switch>
      </div>
    )
  }
}

export default App

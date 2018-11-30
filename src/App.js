import React, {Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Info from './components/info'
import List from './components/List'

const keyGen = () => Math.round(Math.random() * 100000000);

class App extends Component {
  

constructor(){
  super()

  this.state = {
    contacts: [
      { firstName: "Diego", lastName: "Lee", email: 'diégo.lee@example.com', phone: '(349)-329-9253', imgUrl: "https://randomuser.me/api/portraits/men/40.jpg",key:keyGen() },
      { firstName: "Sarah", lastName: "Connor", email: 'ThymeTraveler@t1000.com', phone: '(102)-619-1984', imgUrl: "https://randomuser.me/api/portraits/women/58.jpg",key:keyGen() },
      { firstName: "Chris P", lastName: "Bacon", email: 'whatsCookin@goodLookin.com', phone: '(555)-552-2266', imgUrl: "https://randomuser.me/api/portraits/men/37.jpg",key:keyGen() }
    ],

  };
  
}
  render() {
    return <div>
        <Switch>
          <Route exact path="/" render={() => <List contacts={this.state.contacts} />} />
          <Route path="/contacts" render={() => <List contacts={this.state.contacts} />} />
        </Switch>
      </div>;
  }
}

export default App

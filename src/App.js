import React, {Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Info from './components/info'
import List from './components/List'


class App extends Component {
constructor(){
  super()

  this.state = {
    contacts: [
      { firstName: "Diego", lastName: "Lee", email: 'diégo.lee@example.com', phone: '(349)-329-9253', picUrl: "https://randomuser.me/api/portraits/med/men/40.jpg" },
      { firstName: "Sarah", lastName: "Connor", email: 'ThymeTraveler@t1000.com', phone: '(102)-619-1984', picUrl: "https://randomuser.me/api/portraits/med/women/58.jpg" },
      { firstName: "Chris P", lastName: "Bacon", email: 'whatsCookin@goodLookin.com', phone: '(555)-552-2266', picUrl: "https://randomuser.me/api/portraits/med/men/37.jpg" }
    ]
  };
  
}
  render() {
    return <div>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/contacts" component={List} />
          <Route path="/contacts/info" component={Info} />
        </Switch>
      </div>;
  }
}

export default App

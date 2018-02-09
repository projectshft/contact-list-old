import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import ContactView from './contact-view';
import ContactList from './contact-list';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {name: 'qdogs'},{name: 'Bart'}
      ]
    }
  this.updateContact = this.updateContact.bind(this)
  }

  updateContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.concat([contact])
    })
  }

  render () {
    return (
      <div>
        <ContactView updateContact={this.updateContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}

/*WISHLIST
Prettier styling on contact view
Add default props
When updating imageURL, do something nicer than broken image. Maybe don't have that one update on every change? (be sure to deal with submit function)
Page Headers
*/

// //set App with routes
// const Main = () => {
//   <main>
//     <Switch>
//       <Route exact path='/' component={Main}/>
//       <Route path='/:id' component={ContactView}/>
//     </Switch>
//   </main>
// }

//set routes


const root = document.getElementById('root');

ReactDOM.render(
  <App />,
  root
);

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
  }

  render () {
    return (
      <div>
        <ContactView />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}

/*WISHLIST
Prettier styling on contact view
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

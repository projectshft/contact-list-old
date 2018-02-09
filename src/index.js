import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Contact from './components/contact-detail';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { number: 1, name: "Albert Einstein", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1200px-Albert_Einstein_Head.jpg", email: "aeinstein@example.com", phoneNumber: '1-555-555-5555'},
        { number: 2, name: "Logan Peterson", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1200px-Albert_Einstein_Head.jpg", email: "lapeterson01@gmail.com", phoneNumber: '1-919-625-1624'}
      ],
      all: function() { return this.contacts },
      get: function(id) {
        const isContact = c => c.number === id;
        return this.contacts.find(isContact)
      }
    }
  }

  render () {
    return (
      <div className="container">
        <main>
          <Switch>
            <Route exact path='/contacts' render={(props) => (
              <Home state={this.state}/>
            )}/>
            <Redirect exact from="/" to="/contacts"/>
            <Route path='/contacts/:number' render={(props) => (
              <Contact contact={this.state.get(
                parseInt(props.match.params.number, 10)
              )}/>
            )}/>
          </Switch>
        </main>
      </div>
    )
  }
}



// const ContactAPI = {
//   contacts: [
//     { number: 1, name: "Albert Einstein", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1200px-Albert_Einstein_Head.jpg", email: "aeinstein@example.com", phoneNumber: '1-555-555-5555'},
//     { number: 2, name: "Logan Peterson", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1200px-Albert_Einstein_Head.jpg", email: "lapeterson01@gmail.com", phoneNumber: '1-919-625-1624'}
//   ],
//   all: function() { return this.contacts },
//   get: function(id) {
//     const isContact = c => c.number === id;
//     return this.contacts.find(isContact)
//   }
// }

// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/contacts' component={Home}/>
//       <Redirect exact from="/" to="/contacts"/>
//       <Route path='/contacts/:number' component={Contact}/>
//     </Switch>
//   </main>
// )

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

// export default ContactAPI;

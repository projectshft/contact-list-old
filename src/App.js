import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {onUpdate, forceUpdate, sendEvent} from './state'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

const App = () => {
  return (<div>
    <Header />
    <Main />
  </div>)
}

const Contacts = () => {
  return (
    <Switch>
      <Route exact path='/contacts' component={AllContacts}/>
      <Route path='/contacts/:number' component={Contact}/>
    </Switch>
)
}

const getContacts = () => {
  sendEvent('getContacts')
}

const AllContacts = (props) => {
  console.log(props)
  return ""
  // return (
  //   <div>
  //     <ul>
  //       {
  //         props.contacts.map(c => (<li key={c.id}>
  //           <Link to={`/contacts/${c.id}`}>{c.name}</Link>
  //           <button type="button" className="ml-3 btn btn-sm btn-outline-primary">
  //             <span className="oi oi-pencil"></span>
  //           </button>
  //           <button type="button" className="ml-1 btn btn-sm btn-outline-danger">
  //             <span className="oi oi-x"></span>
  //           </button>
  //         </li>))
  //       }
  //     </ul>
  //   </div>)
}

const Contact = (props) => {
  console.log(props)

    const contact_id = parseInt(props.match.params.id)
    props.contacts.forEach((c) => {
      if (c.id == contact_id) {
        return (<div>
          <h1>{c.name}
            (#{c.id})</h1>
          <h2>Position: {c.number}</h2>
          <Link to='/Contacts'>Back</Link>
        </div>)
      }
    })
}

const Header = () => (<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Contact List</a>
  <ul className="navbar-nav">
    <li className="nav-item nav-link">
      <Link to={'/contacts'}>All Contacts</Link>
    </li>
  </ul>
</nav>)

const Main = (props) => {
  return (<main>
    <Switch>
      <Route exact path='/' render={(routeProps)=><Contacts {...routeProps} {...props}/>}/>
      <Route path='/' render={(routeProps)=><Contacts {...routeProps} {...props}/>}/>
      <Route path='/contacts' render={(routeProps)=><Contact {...routeProps} {...props}/>}/>
    </Switch>
  </main>)
}

export default App;

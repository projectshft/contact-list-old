import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    <Main />
  </div>
)

const ContactsAPI = {
  contacts: [
    {
      id: 87878787,
      name: 'jeff goldblum',
      email: 'jeff@goldblum.com',
      phone_number: '8006666666'
    },
    {
      id: 79797979,
      name: 'rachel dratch',
      email: 'dratchy@weird.com',
      phone_number: '9009119111'
    }
  ],
  all: function() { return this.contacts},
  get: function(a) {
    const isContact = contacts => contacts.id === a
    return this.contacts.find(isContact)
  }
}

const ContactView = (props) => {
  const contactView = ContactsAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!contactView) {
    return <div>Sorry, but that friend does not exist</div>
  }
  return (
    <div>
      <h1>{contactView.name} (#{contactView.phone_number})</h1>
      <h2>Email: {contactView.email}</h2>
      <Link to='/'>Back</Link>
    </div>
  )
}

const ContactList = () => (
  <div>
   <h1>CONTACTS</h1>
   <ul>
    {
      ContactsAPI.all().map(contacts => (
        <li key={contacts.id}>
          <Link to={`/${contacts.id}`}>{contacts.name}</Link>
        </li>
      ))
    }
   </ul>
  </div>
)


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ContactList}/>
      <Route path='/:id' component={ContactView}/>
    </Switch>
  </main>
)



ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

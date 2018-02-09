import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import EditContact from './edit-contact'


const App = () => (
  <div>
    <Main />
  </div>
)

const Home = () => (
  <div>
    <Header />
    <h1>Contacts List</h1>
    <FullContactList/>
  </div>
)

const Header = () => (
      <ul className="navigation grid grid-gutters large-grid-fit med-grid-fit small-grid-1of2">
        <li className="grid-cell">
          <Link className="navigation-link navigation-brand" to="/">
            Home
          </Link>
          --
          <Link className="navigation-link" to="/list">
            <i className="fa fa-comments"></i> Edit List
          </Link>
           --
          <Link className="navigation-link" to="/edit">
            <i className="fa fa-comments"></i> Add Contact
          </Link>
        </li>
      </ul>
)


const ContactAPI = {
  contacts: [
    { number: 1, name: "Aragorn II Elessar",  email: "strider@example.com", phone: '712-363-0242', imageurl: 'https://vignette.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg/revision/latest?cb=20170121121423' },
    { number: 2, name: "Gandalf Grey", email: "grey@example.com", phone: '712-363-0242', imageurl: 'data:image/jpeg;base64,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' },
    { number: 3, name: "Samwise Gamgee", email: "bravegardener@example.com", phone: '712-363-0242', imageurl: 'https://vignette.wikia.nocookie.net/lotr/images/2/20/Sam.jpg/revision/latest?cb=20070623123241' },
    { number: 4, name: "Legolas Greenleaf", email: "friendofdwarves@example.com", phone: '712-363-0242', imageurl: 'https://vignette.wikia.nocookie.net/lotr/images/9/94/Legolas_in_Moria.jpg/revision/latest/scale-to-width-down/250?cb=20070427032701' },
    { number: 5, name: "Gollum Sméagol", email: "precious@example.com", phone: '712-363-0242', imageurl: 'https://vignette.wikia.nocookie.net/lotr/images/e/e1/Gollum_Render.png/revision/latest?cb=20141218075509' },
    { number: 6, name: "Frodo Baggins", email: "ringbearer@example.com", phone: '712-363-0242', imageurl: 'https://vignette.wikia.nocookie.net/lotr/images/5/54/Untitledjk.png/revision/latest/scale-to-width-down/700?cb=20130313174543' }
  ],
  all: function() { return this.contacts},
  get: function(id) {
    const isContact = p => p.number === id
    return this.contacts.find(isContact)
  }
}

const FullContactList = () => (
  <div>
    <ul>
      {
        ContactAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/list/${p.number}`}>{p.name}</Link>

          </li>
        ))
      }
    </ul>
  </div>
)

const ContactView = (props) => {
  const contact = ContactAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h1>{contact.name} (Speed Dial #{contact.number})</h1>
      <h2>Name: {contact.name}</h2>
      <h2><img src={contact.imageurl}/></h2>
      <h2>Email: {contact.email}</h2>
      <h2>Phone Number: {contact.phone}</h2>
      <Link to='/list'>Back</Link>
    </div>
  )
}

const ContactList = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/list' component={FullContactList}/>
      <Route path='/list/:number' component={ContactView}/>
    </Switch>
  </div>
)

// const EditContact = () => (
//   <div>
//     <Header />
//     <h1>Add Contact</h1>
//     <form action="/action_page.php">
//       First name:
//       <input type="text" name="firstname" value="Mickey" />
//       Last name:
//       <input type="text" name="lastname" value="Mouse" />
//       <input type="submit" value="Add/Edit"/>
//     </form>
//   </div>
// )

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/list' component={ContactList}/>
      <Route path='/edit' component={EditContact}/>
    </Switch>
  </main>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

export default App

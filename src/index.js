import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import ContactView from './components/ContactView';
import ContactView from './components/ContactView';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

const state = {
  "currentContact": 123,
  "contacts": [
    {
      "id": 1,
      "name": "Albert Einstein",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
      "email": "aeinstein@example.com",
      "phone_number": "3361115555"
    },
    {
      "id": 2,
      "name": "Jake Statefarm",
      "image_url": "http://i0.kym-cdn.com/entries/icons/original/000/017/912/uhh_khakis.png",
      "email": "JakeSF@example.com",
      "phone_number": "9192224444"
    },
    {
      "id": 3,
      "name": "Henry John",
      "image_url": "https://411mania.com/wp-content/uploads/2018/01/Mark-Henry-645x370.jpg",
      "email": "HJ101@example.com",
      "phone_number": "9101117777"
    }
  ],
  all: function() { return this.contacts},
  get: function(id) {
    const isContact = p => p.id === id
    return this.contacts.find(isContact)
  }
}

const Home = () => (
  <div>
        {
          state.all().maps(p => (
            <p key={p.id}>
              <span> {p.name}</span>
              <Link to={`/roster/${p.id}`}> Edit </Link>
              <span><button>Delete</button></span>
            </p>
          ))
        }
  </div>
)

const ContactList = () => (
  <div>
    <ul>
      {
        state.all().map(p => (
          <li key={p.id}>
            <Link to={`/roster/${p.id}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const ContactHomeList = () => (
  <Switch>
    <Route exact path='/roster' component={ContactList}/>
    <Route path='/roster/:id' component={ContactView}/>
  </Switch>
)

const Header = () => (
  <div>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
      <span>Add Contact</span>

  </div>
)

const ContactView = (props) => {
  console.log(props)
  const contact = state.get(
    parseInt(props.match.params.id, 10)
  )
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h4>{contact.name} <button><Link to='/'>Back to Contacts List</Link></button></h4>
      <p>Name: {contact.name}</p>
      <p>Phone Number: {contact.phone_number}</p>
      <p>Email: {contact.email}</p>
      <img className="contact-pic" src={contact.image_url} alt="Contact"/>


    </div>
  )
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={ContactHomeList}/>
    </Switch>
  </main>
)

const root = document.querySelector('#root');

// When the state changes, re-render our app!
onUpdate((state) => {
  ReactDOM.render(
    <Hello name={state.name} />,
    root
  );
});

// Trigger the initial update so our app will render for the first time.
forceUpdate();

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

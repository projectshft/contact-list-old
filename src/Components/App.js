import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React from 'react';
import { Button } from 'reactstrap';
import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm'



// import ShowContact from '../Components/ShowContact'
// import NewContact from '../Components/NewContact';
// import logo from './logo.svg';
// import '../index.css';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contactList: props.contactData
    }
    console.log(this.state.contactList);
   
  }

  // <Route path="/contacts" component={App} />
  

  
  render() {
    return (
      <Router> 
      <div className="App">
        <header>
          <h1>My Contacts</h1>
          
          <Link to="/contacts/new">
            <Button color="primary">Add Contact </Button>
          </Link>
          
        </header>

        <main>
          <div>
            <ContactList contacts={this.state.contactList}/>
          </div>
        </main>

          <Route path="/contacts/new" component={ContactForm} />
      </div>
      </Router>
    );
  }
}

export default App;

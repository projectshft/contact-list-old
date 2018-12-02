import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Button } from 'reactstrap';

import React from 'react';
import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm'



// import ShowContact from '../Components/ShowContact'
// import logo from './logo.svg';
// import '../index.css';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contactList: props.contactData
    }
    console.log(this.state.contactList);

    this.addContact = this.addContact.bind(this);
  }
 
  addContact (contact) {
    this.setState({ contactList: this.state.contacts.concat([contact]) });
  }
  render() {
    return (
      <Router> 
        <div className="App">
          <main>
            <header>
              <h1>My Contacts</h1>

              <Link to="/contacts/form">
                <Button color="primary">Add Contact </Button>
              </Link>
            </header>

            <div>
              <ContactList contacts={this.state.contactList} />
            </div>
          </main>

          <Route path="/contacts/form" component={ContactForm} />
          
          
       </div>
      </Router>
    );
  }
}

export default App;

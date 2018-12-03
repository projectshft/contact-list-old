import { Route, Link} from 'react-router-dom';
import { Button } from 'reactstrap';

import React from 'react';
import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contactList: props.contactData
    }
    console.log(this.state.contactList);

    this.addContact = this.addContact.bind(this);
  }
 
  addContact(contact) {
    this.setState({ contactList: this.state.contactList.concat(contact) });
  }
  render() {
    return ( 
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

          <Route path="/contacts/form" render={() => (<ContactForm addContact={this.addContact} contactList={this.props.ContactData}/>)}/>
                   
       </div>
    );
  }
}

export default App;

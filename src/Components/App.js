import React from 'react';
import { Button } from 'reactstrap';
import ContactList from '../Components/ContactList';



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


  
  render() {
    return (
      <div className="App">
        <header>
          <h1>My Contacts <Button color="primary">Add Contact </Button>
          </h1>
    
        </header>

        <main>
          <div>
            <ContactList contacts={this.state.contactList}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

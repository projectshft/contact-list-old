import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';
import JaneImage from '../images/jane_eyre.jpg';
import RochesterImage from '../images/mr_rochester.jpg';
import BerthaImage from '../images/mrs_rochester.jpg';
import AdeleImage from '../images/adele_varens.jpg';
import BlancheImage from '../images/blanche_ingram.jpg'

class App extends Component {
  constructor () {
    super()

    this.state = {

      //to hold all data for contact list and details
      contacts: [
        // default contacts to display
        {
          id: 123,
          name: "Jane Eyre",
          email: "lonelyorphan@lowoodschool.edu",
          phone: "(286) 555-9830",
          image: JaneImage
        },

        {
          id: 234,
          name: "Edward Rochester",
          email: "sirmoody@thornfield.com",
          phone: "(676) 555-2548",
          image: RochesterImage
        },

        {
          id: 345,
          name: "Bertha Mason",
          email: "crazywife@theattic.net",
          phone: "(232) 555-9372",
          image: BerthaImage
        },

        {
          id: 456,
          name: "Adele Varens",
          email: "fashionluvr@thornfield.com",
          phone: "(676) 555-2548",
          image: AdeleImage
        },

        {
          id: 567,
          name: "Blanche Ingram",
          email: "golddigger@ingrampark.com",
          phone: "(936) 555-0257",
          image: BlancheImage
        }
      ]
    }

    //bind addContact to App component
    this.addContact = this.addContact.bind(this);
  }
  
  // add new contact to app state with contact form input
  addContact = (newContact) => {
    console.log('adding contact')
       
    this.setState({ contacts: this.state.contacts.concat([newContact]) });
  }

  render() {
    return (
      <div>
        {/* to direct which component to display based on url entered */}
        <Switch>
          
          {/* navigate to home from either path // pass contacts to render in list on home page*/}
          <Route exact path={[ '/', '/contacts' ]} render={() => (
              <Home contacts={ this.state.contacts } />   
            )} /> 

          {/* pass function to add new contacts to app state through contact form */}
          <Route path='/contacts/new' render={(routerProps) => (
            <ContactForm addNew={ this.addContact } history={routerProps.history} />
          )} />

          {/* navigate to contact details by matching number in url path to contact id */}
          <Route path='/contacts/:id' render={(routerProps) => (
      <ContactDetail contactId={parseInt(routerProps.match.params.id, 10)} contacts={this.state.contacts} />
    )}/>

        </Switch>
      </div>
    )
  }
}

export default App

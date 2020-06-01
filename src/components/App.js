import {Switch, Route, Link} from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import ContactDetails from './Contact';
import AddContact from './AddContact';
import ContactList from './ContactList';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            contacts: [
              { id: 1, imageURL: 'https://gasmonkeygarage.com/wp-content/uploads/2016/10/Richard.jpg', name: 'Richard Rawlings', email: 'rrawlings@gasmonkeygarage.com', phone: '1234567890' },
              { id: 2, imageURL: 'https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Fartofgears.com%2Ffiles%2F2017%2F01%2FGas-Monkey-Garage_Jason_Aker_Portrait2.jpg', name: 'Jason Aker', email: 'jaker@gasmonkeygarage.com', phone: '0987654321' },
              { id: 3, imageURL: 'https://speedsociety.com/wp-content/uploads/2016/11/richard-rawlingss-magic-8-ball-g-868x488.jpg?ezimgfmt=rs:392x220/rscb2/ng:webp/ngcb2', name: 'Mike Coy', email: 'mcoy@gasmonkeygarage.com', phone: '5678901234' },
            ]
        }
        //binded the functions to the this in state
        this.addContact = this.addContact.bind(this);

    }
    //called when NewContact is added, adds info of new contact to the state
    addContact(contact) {
        this.setState({
            contacts: this.state.contacts.concat([contact])
        });
    }
    render() {
        return (

            <div className='contacts'>
              <Switch>
                  <Route exact path='/' render={() => (
                      <ContactList contacts={this.state.contacts}/>)}/>
                  <Route
                      path='/contact/new' render={(routeProps) => (
                      <AddContact history={routeProps.history} contacts={this.state.contacts} addContact={this.addContact}/>
                    )}/>
                  <Route path='/contact/:number' render={(routeProps) => (
                    <ContactDetails contactId={parseInt(routeProps.match.params.number, 10)} contacts={this.state.contacts}/>
                  )}/>
              </Switch>
            </div>

        )
    }
}

App.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(AddContact.propTypes))
};

export default App

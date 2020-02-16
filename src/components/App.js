import {Switch, Route} from 'react-router-dom'
import React from 'react'
import List from './List'
import PropTypes from 'prop-types'
import ContactNew from './ContactNew';

class App extends React.Component {
    //constructor function to set my state
    constructor() {
        super()

        this.state = {
            contacts: [
                //added contacts so information would be there when logged on
                {
                    id: 1,
                    name: 'Hannah Cline',
                    email: 'hannah@gmail.com',
                    phone: 4126451960,
                    imageURL: 'https://avatarfiles.alphacoders.com/151/151295.jpg'
                }, {
                    id: 2,
                    name: 'Katy Anderson',
                    email: 'katy@gmail.com',
                    phone: 9199099090,
                    imageURL: 'https://avatarfiles.alphacoders.com/220/220587.jpg'
                }, {
                    id: 3,
                    name: 'Rachel Fischoff',
                    email: 'rachel@gmail.com',
                    phone: 9199099090,
                    imageURL: 'https://avatarfiles.alphacoders.com/126/126281.png'
                }
            ]
        }
        //binded the functions to the this in state
        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }
    //called when NewContact is added, adds info of new contact to the state
    addContact(contact) {
        this.setState({
            contacts: this.state.contacts.concat([contact])
        });
    }
    //called when EditContact is submited, edits the info on the contact
    //passes the edited contacts id and information
    editContact(id, edit) {
        //index finds index of the object that's id # matches the edited contacts id number
        var index = this.state.contacts.findIndex(c => c.id === id);
        //replaces the information with the edits
        this.setState({
            contacts: [
                ...this.state.contacts.slice(0, index),
                Object.assign({}, this.state.contacts[index], edit),
                ...this.state.contacts.slice(index + 1)
            ]
        });
    }
    //is called when delete button is pressed on the contact list
    deleteContact(e) {
        //filters arrays to return new array without deleted info
        let filteredArray = this.state.contacts.filter(c => c.id !== e)
        this.setState({contacts: filteredArray});
    }

    render() {
        return (
            //navigates to List and passes all the props needed from App
            <div className='contacts'>
                <Switch>
                    <Route path='/'render={() => (
                    <List
                        addContact={this.addContact}
                        contacts={this.state.contacts}
                        editContact={this.editContact}
                        deleteContact={this.deleteContact}/>
                        )}/>
                </Switch>
            </div>

        )
    }
}
//makes sure App's state is an array with objects inside and those objects match the proptypes of each individual contact added in NewContact
App.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(ContactNew.propTypes)).isRequired
};
//exports App
export default App

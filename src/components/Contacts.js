import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';


import Contact from './Contact';
import ContactsNew from './ContactsNew';
import AllContacts from './AllContacts';


const Contacts = ({ people, addContact }) => (
    <div>
        <Link to="/" >Home</Link>
        <h1 className="text-center" >Contacts</h1>
        {/* <button className="btn-primary" ><a href="#/contacts/new"></a> Add New Contact</button> */}


        <div>
            <div className="text-right">
                <Link to="/contacts/new"> Add New Contact</Link>
            </div>
            <Switch>
                <Route path="/contacts/new" render={(routerProps) => (
                    <ContactsNew history={routerProps.history} people={people} addContact={addContact} />
                )} />
                <Route path="/contacts/:id" render={() => (
                    <Contact contactID={people.id} people={people} />
                )} />

                {/* this routes to the list of people in the AllContacts file  */}
                <Route path="/contacts" render={() => (
                    <AllContacts people={people} />
                )} />
            </Switch>
        </div>
    </div>
)

export default Contacts

Contacts.propTypes = {
    people: PropTypes.array.isRequired,
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone_number: PropTypes.number.isRequired,
        image_url: PropTypes.string.isRequired

    }),
    addContact: PropTypes.func.isRequired
}
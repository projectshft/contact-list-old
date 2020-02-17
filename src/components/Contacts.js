import { Switch, Route, Router } from 'react-router-dom'
import { Link } from 'react-router-dom';
import React from 'react';

import AllContacts from './AllContacts';
import Contact from './Contact';



const Contacts = ({ people }) => (
    <div>
        <Link to="/" >Home</Link>
        <h1 className="text-center" >Contacts</h1>

        <div>
            <Switch>
                <Route path="/contacts/:id" render={() => (
                    <Contact contactID={people.id} people={people} />
                ) }  />

                {/* this routes to the list of people in the AllContacts file  */}
                <Route path="/contacts" render={() => (
                    <AllContacts people={people} />
                )} />
            </Switch>
        </div>
    </div>
)

export default Contacts
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import React from 'react';

import AllContacts from './AllContacts';



const Contacts = ({ people }) => (
    <div>
        <Link to="/" >Home</Link>
        <h1 className="text-center" >Contacts</h1>
        <div>
            <Switch>
                <Route path="/contacts" render={() => (
                    <AllContacts people={people} />
                )} />
            </Switch>
        </div>
    </div>
)

export default Contacts
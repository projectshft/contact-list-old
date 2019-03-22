/* EVAL 5 TODO
-Show the user a list of all their contacts. This should be the "index" page and should have its own route.
-Allow the user to add a contact with a name, image, email, and phone number.
-use Proptypes
-edge cases
-back buttons

    -addcontact.js (and app.js):
    clicking the addContact button  should take you a new route (/contacts/new) with a form for adding a new contact. 
    After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
    this is where I'd imagine the context API would be helpful...?

    -contact.js:
    each contact on the main route should be clickable; when clicked, it leads to a new route /counts/{the id of your contact}
    each time a new contact is created, you should generate a unique id for them 
    To the individual contact view, add a "Back" button that takes the user back to the /contacts view and main contacts list.

    -contacts.js:
    should hold all of the state of the contacts
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//renderthe app component into the element 
ReactDOM.render(<App />, document.getElementById('root'));

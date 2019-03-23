/* EVAL 5 TODO
-Show the user a list of all their contacts. This should be the "index" page and should have its own route.
-Allow the user to add a contact with a name, image, email, and phone number.
-use Proptypes (only on Contact.js thus far)
-edge cases
-back buttons

    -addcontact.js (and app.js):
    DONE clicking the addContact button  should take you a new route (/contacts/new) with a form for adding a new contact. 
    After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
    this is where I'd imagine the context API would be helpful...?

    -contact.js:
    each contact on the main route should be clickable; when clicked, it leads to a new route /contacts/{the id of your contact}
   DONE each time a new contact is created, you should generate a unique id for them 
   DONE  To the individual contact view, add a "Back" button that takes the user back to the /contacts view and main contacts list.

    -contacts.js:
    should hold all of the state of the contacts MOVED TO APP
bugs:
    -detail won't show up (look at structure of router)
    -can't submit form on enter - FIXED
    -can submit any gibberish as a name
    -form disappears on enter - FIXED
    -input fields don't clear after submit
    -sort.() sorts the objects in the contacts array, not just name

*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//renderthe app component into the element 
ReactDOM.render(<App />, document.getElementById('root'));

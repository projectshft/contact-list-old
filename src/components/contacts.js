import React from 'react';
import {Link} from 'react-router-dom';
import Id from './id.js';
import PropTypes from 'prop-types';

// !!! RENAME TO "contacts-list.js"
// Make "Add New Contact" link into "Add" button

// Component to render list of names

// Each name is clickable, and redirects user to </id>
// Button to add new contact, and redirects user to </new>

class Contacts extends React.Component {

 

    render() {
        
        //console.log(this.props.contacts)

        return (

           <div>
                <ul> 
                    {this.props.contacts.map(person => (
                        <li key={person.id}>
                        <Link to={`/contacts/${person.id}`}>Click to see detailed info for: {person.fullName}</Link>
                        </li>      
                    ))}       
                    
                </ul>


               <Link className="btn" to={'/new'}>Add New Contact</Link>
               

           </div> 
                
        )
    }

}

// Makes sure proptype passed from {App} is an array of objects
Contacts.propTypes = {
    contacts: PropTypes.array.isRequired
}

const listStyle = {
    backgroundColor: 'gray',
    padding: '5px'
}

export default Contacts;
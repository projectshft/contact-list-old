import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// !!! RENAME TO "contacts-list.js"
// Make "Add New Contact" link into "Add" button

// Component to render list of names

// Each name is clickable, and redirects user to </id>
// Button to add new contact, and redirects user to </new>

class ContactList extends React.Component {


    render() {

        return (

           <div>
               <h4>Click to see contact info</h4>
                <ul> 
                    {this.props.contacts.map(person => (
                        <li key={person.id}>
                            <Link to={`/contacts/${person.id}`}>
                                <h3>{person.lastName}, {person.firstName}</h3>
                            </Link>
                        </li>      
                    ))}       
                    
                </ul>


               <Link className="btn" to={'/new'}>Add New Contact</Link>
               

           </div> 
                
        )
    }

}

// Makes sure proptype passed from {App} is an array of objects
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
}

const listStyle = {
    backgroundColor: 'gray',
    padding: '5px'
}

export default ContactList;
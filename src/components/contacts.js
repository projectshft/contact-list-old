import React from 'react';
import {Link} from 'react-router-dom';
import Id from './id.js';
import PropTypes from 'prop-types';

// Component to render list of names

// Each name is clickable, and redirects user to </id>
// Button to add new contact, and redirects user to </new>

class Contacts extends React.Component {

 

    goToNew () {
        return (
           console.log('gotoNew clicked!')
        )
    }
   

    render() {
        
        //console.log(this.props.contacts)

        return this.props.contacts.map((person) => (

           <div>
                <ul>        
                    <li key={person.id}>
                    <Link to={`/contacts/${person.id}`}>Click to see detailed info for: {person.fullName}</Link>
                    </li>      
                </ul>


               <Link to={'/new'}>Add New Contact</Link>

               <Id 
                key={person.id} 
                person={person} 
                markComplete={this.props.markComplete}
                deleteId={this.props.deleteId}
                />
           </div> 
                
        ));
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
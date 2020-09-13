import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

//create a handleDeleteClick function
    // create delete contact function
    // link it to 'delete' word

class AllContacts extends React.Component {
    constructor () {
        super()
        //console.log(this)
        
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick (contact) {
        this.props.deleteContact(contact)
        //takes in a contact
        //find the id of the contact
        //run deleteContact on that contact 
        //should only run onClick ***************************************
    }

    render () {
        return (
            <div>
                <div className='container text-left contacts-title'>
                    <div className='row'>
                        <h1 id='contact-title'>Contacts</h1>
                        <button id='add-contact'><Link to={`/contacts/new`}>Add Contact</Link></button>
                    </div>
                </div>
                <div className='container contact-list'>
                    <div className='row'>
                        <ul>
                            {
                                this.props.contacts.map(elem => (
                                    <li key={elem.id}>
                                        <Link to={`/contacts/${elem.id}`}>{elem.name}</Link>
                                        <span id='edit'>edit</span> 
                                        <span className='delete-contact' onClick={this.handleDeleteClick(this)}>delete</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

AllContacts.propTypes = {
    contacts: PropTypes.array.isRequired
};
export default AllContacts
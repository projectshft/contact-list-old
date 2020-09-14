import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class AllContacts extends React.Component {
    constructor () {
        super()
        
        //set 'this.state' to 'this'. Not completely sure why its necessary but, 
            //will brake code if not present or initialized to something else
            //Note: this.props is undefined at this point
        this.state = this
       
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick (elemId) {
        //elemId from the map function in line 41 is used to
            //find the current element
        const contacts = this.props.contacts
        const contact = _.find(contacts, { id: elemId})

        let deletedContactArray = contacts.filter(e => e !== contact)
        
        //We pass a filtered array containing only the contacts not being deleted to
            //deleteContact() initialized inside of App.js
        this.props.deleteContact(deletedContactArray)
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
                            {/* 'map' sets up each contact with a link to their individual page and binds 
                                handleDeleteClick() to the 'delete element */}
                            {
                                this.props.contacts.map(elem => (
                                    <li key={elem.id}>
                                        <Link to={`/contacts/${elem.id}`}>{elem.name}</Link>
                                        <span className='edit-contact'>edit</span> 
                                        <span className='delete-contact' onClick={this.handleDeleteClick.bind(this, elem.id)}><u>delete</u></span>
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
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default AllContacts
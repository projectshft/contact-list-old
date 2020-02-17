import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const uuidv4 = require('uuid/v4')

export default function NewContact(props) {
	//using uuid to generate unique id's for the contact record
	//set the state for contact
	const [contact, setContactDetails] = useState({id: uuidv4(), name: '', phone: '', email: '', photo: ''});


	const handleSubmit = (e) => {
		e.preventDefault()

		if (!contact) return;
		//add new contact and return to the list of contacts page
		addContact(contact)
		props.history.push('/contacts')
	}

	const handleInputChange = e => {
        const {name, value} = e.target
        //populate contact object with data from the form input fields
        setContactDetails({...contact, [name]: value })  

    }

	const addContact = contact => {
		props.contacts.push(contact);
	};

	return (
      <div>
      	<Link to='/contacts' style={{ textDecoration: 'none' }}>
      		<Button variant="outlined" style={{ marginTop: '10px', float: 'right'}}>Back</Button>
      	</Link>
        <form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				className='new-contact'
				placeholder="Enter Name"
				onChange={handleInputChange}
				required
			/>
	        <br/>
			<input
				type="text"
				name="phone"
				className='new-contact'
				placeholder="Enter 10 digits phone number"
				onChange={handleInputChange}
				pattern="^\d{3}\d{3}\d{4}$"
				required
			/>
	        <br/>
			<input
				type="text"
				name="email"
				className='new-contact'
				placeholder="Enter Email Address"
				onChange={handleInputChange}
				pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
				required
			/>
			<input
				type="text"
				name="photo"
				className='new-contact'
				placeholder="Add a picture"
				onChange={handleInputChange}
				required
			/>
	        <Button variant="outlined" type="submit" style={{ marginTop: '10px'}}>Submit</Button>
        </form>
      </div>
  	);

	NewContact.propTypes = {
		name: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		handleInputChange: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		addContact: PropTypes.func.isRequired
	};
};



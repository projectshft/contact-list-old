import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const uuidv4 = require('uuid/v4');

export default function NewContact(props) {
	//using uuid to generate unique id's for the contact record
	//set the state for contact
	const [contact, setContactDetails] = useState({id: uuidv4(), name: '', phone: '', email: '', photo: ''});
	//need to validate email and phone fields
	const validateField = (fieldName, value) => {
		let emailValid = ''
		let phoneValid ='';

		switch(fieldName) {
		  case 'email':
		    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		    if(!emailValid) return false;
		    break;
		  case 'phone':
		    phoneValid = value.match(/^\d{4}\d{3}\d{4}$/);
		    if(!phoneValid) return false;
		    break;
		  default:
		    break;
		}

		return true;
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!contact) return;

		addContact(contact)
		props.history.push('/contacts')
	}

	const handleInputChange = e => {
        const {name, value} = e.target
        //populate contact object with data from the form input fields
        setContactDetails({...contact, [name]: value })  

    	if(!validateField(name, value) && name == 'email' && value != '') {
        	alert('Email is invalid');
        }
        if(!validateField(name, value) && name == 'phone' && value != '') {
        	alert('Phone format is invalid');
        }
    }

	const addContact = contact => {
		props.contacts.push(contact);
	};

	return (
      <div>
        <form onSubmit={handleSubmit}>
	        <label>Name</label>
			<input
				type="text"
				name="name"
				className="input"
				placeholder="Enter Name"
				onChange={handleInputChange}
				required
			/>

	        <br/>

	        <label>Phone</label>
			<input
				type="text"
				name="phone"
				placeholder="Enter phone number"
				onChange={handleInputChange}
				required
			/>

	        <br/>

	        <label>Email</label>
			<input
				type="text"
				name="email"
				className="input"
				placeholder="Enter Email Address"
				onChange={handleInputChange}
				required
			/>

	        <label>Photo</label>
			<input
				type="text"
				name="photo"
				className="input"
				placeholder="Add a picture"
				onChange={handleInputChange}
				required
			/>
	        <button type="submit" >Submit</button>
        </form>

        <Link to='/contacts'>Contact List</Link>
      </div>


  );

};

NewContact.propTypes = {
	contact: PropTypes.object
};



// class NewContact extends React.Component {
//   render() {
//     return (
//       <div>
//       	New Contact
//       	<div><Link to='/contacts'>Back</Link></div>
//       </div>

//     )
//   }
// }

// export default NewContact;
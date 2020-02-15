import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import faker from 'faker'

export default function NewContact(props) {
	//need to generate unique id's for the contact record
	const generateId = () => Math.floor(Math.random()*100000)
	//set the state for contact
	const [contact, setContactDetails] = useState({id: generateId(), name: '', phone: '', email: '', photo: ''});


	const handleSubmit = (e) => {
		e.preventDefault()

		if (!contact) return;
		addContact(contact)
		props.history.push('/contacts')
	}

	const handleInputChange = e => {
        const {name, value} = e.target
        //populate contact object with data from the form input fields
        setContactDetails({...contact, [name]: value})   
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
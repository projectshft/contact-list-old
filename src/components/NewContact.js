import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NewContact(props, contacts) {

	const [contact, setContactDetails] = useState({name: '', phone: '', email: '', photo: ''});

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit clicked')
		console.log('from handleSubmit contact: ', contact)
		if (!contact) return;
		addContact(contact)
	}

	const handleInputChange = e => {
        const {name, value} = e.target
        setContactDetails({...contact, [name]: value})   
    }

	const addContact = contact => {
		console.log('from addContact: ', contact)
		props.contacts.push(contact);
		console.log('contacts array after added contact: ', props.contacts)
	};

	return (
      <div>
        <form onSubmit={handleSubmit}>
	        <label>Name</label>
			<input
				type="text"
				name="name"
				className="input"

				onChange={handleInputChange}
			/>

	        <br/>

	        <label>Phone</label>
			<input
				type="text"
				name="phone"
				className="input"

				onChange={handleInputChange}
			/>

	        <br/>

	        <label>Email</label>
			<input
				type="text"
				name="email"
				className="input"

				onChange={handleInputChange}
			/>

	        <label>Photo</label>
			<input
				type="text"
				name="photo"
				className="input"

				onChange={handleInputChange}
			/>
	        <button type="submit" >Submit</button>
        </form>

        <Link to='/contacts'>Contact List</Link>
      </div>


  );


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
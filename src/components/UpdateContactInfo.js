import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function UpdateContactInfo(props) {

	const generateId = () => Math.floor(Math.random()*100000)

	const [contact, setContactDetails] = useState({});
	console.log(props.contactId)
	useEffect(() => {
		const findContactById = (id) => {
		  		return props.contacts.filter((contact) => {
		  			console.log('Current Contact from find : ', contact)
		    return parseInt(contact.id) === parseInt(id)
		  });
		};

		const currentContact = findContactById(props.contactId)[0];
		console.log('Current Contact after find: ', currentContact)
		setContactDetails(currentContact);

		
	}, [contact]);

	
	console.log('Contact info: ', contact)

	const updateContact = contact => {
		const newContacts = props.contacts.map((c) => {
			if (contact.id == c.id) {
				c = contact;
			}
			console.log(c)
			return c;
		})

		const [contacts, setContacts] = useState(newContacts);
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit clicked')
		console.log('from handleSubmit contact: ', contact)
		if (!contact) return;
		updateContact(contact)
		props.history.push('/contacts')
	}

	const handleInputChange = e => {
        const {name, value} = e.target
        setContactDetails({...contact, [name]: value})   
    }


  return (
  	<div>
        <form onSubmit={handleSubmit}>
	        <label>Name</label>
			<input
				type="text"
				name="name"
				className="input"
				value={contact.name}
				onChange={handleInputChange}
				required
			/>

	        <br/>

	        <label>Phone</label>
			<input
				type="text"
				name="phone"
				value={contact.phone}
				onChange={handleInputChange}
				required
			/>

	        <br/>

	        <label>Email</label>
			<input
				type="text"
				name="email"
				className="input"
				value={contact.email}
				onChange={handleInputChange}
				required
			/>

	        <label>Photo</label>
			<input
				type="text"
				name="photo"
				className="input"
				value={contact.photo}
				onChange={handleInputChange}
				required
			/>
	        <button type="submit" >Submit</button>
        </form>

        <Link to='/contacts'>Contact List</Link>
  	</div>
  )

}
// class UpdateContactInfo extends React.Component {
//   render() {
//     return (
//       <div>
//       	UpdateContactInfo
//       </div>
//     )
//   }
// }

// export default UpdateContactInfo;
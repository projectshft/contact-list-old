import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'


export default function UpdateContactInfo(props) {

	const [contact, setContactDetails] = useState({});
	useEffect(() => {
		const findContactById = (id) => {
		  		return props.contacts.filter((contact) => {
		  			console.log('Current Contact from find : ', contact)
		    return contact.id === id
		  });
		};
		//got the contact to edit and set the state to the contact
		const currentContact = findContactById(props.contactId)[0];
		setContactDetails(currentContact);

		
	}, [0]);


	const handleSubmit = (e) => {
		e.preventDefault()
		//update contact info and return to list of contacts page
		props.updateContact(contact)
		props.history.push('/contacts')
	}

	const handleInputChange = e => {
        const {name, value} = e.target
        setContactDetails({...contact, [name]: value})   
    }


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
				placeholder={contact.name}
				onChange={handleInputChange}
			/>

	        <br/>

			<input
				type="text"
				name="phone"
				className='new-contact'
				placeholder={contact.phone}
				onChange={handleInputChange}
				pattern="^\d{3}\d{3}\d{4}$"
			/>

	        <br/>

			<input
				type="text"
				name="email"
				className='new-contact'
				placeholder={contact.email}
				onChange={handleInputChange}
				pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
			/>

			<input
				type="text"
				name="photo"
				className='new-contact'
				placeholder='image'
				onChange={handleInputChange}
			/>
	        <Button variant="outlined" type="submit" style={{ marginTop: '10px'}}>Update</Button>
        </form>
  	</div>
  )

	UpdateContactInfo.propTypes = {
		name: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired,
		handleInputChange: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired
	};

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
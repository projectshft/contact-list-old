import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import faker from 'faker'
import _ from 'lodash'
import $ from 'jquery'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function ContactDetail(props) {

	const contact = _.find(props.contacts, { id: props.contactId });

	//use ui-avatars to create an avatar instead of faker images
	//need to replace blank with '+'' to pass 
	//the string to the API to create an avatar with initials of the contact
	const replacedStr = (name, character) => {
		  return name.replace(/\s+/g, character);
	}

	let strName = replacedStr(contact.name, '+');

	//phone input set to 10 digits, will format phone number to display on contact list and detail view
	let formatedPhone = (str) => {
		//Check if the input is of correct length just in case :)
		let match = str.match(/^(\d{3})(\d{3})(\d{4})$/);

		if (match) {
			return '(' + match[1] + ') ' + match[2] + '-' + match[3]
		};

		return null
	}

	//use material-ui to style components
	const useStyles = makeStyles(theme => ({
	  margin: {
	    margin: theme.spacing(1),
	  },
	  extendedIcon: {
	    marginRight: theme.spacing(1),
	  },
	}));

	const classes = useStyles()

    return (
    	<div>
			<div className="contact" id={contact.id}>
				<div className="image-cropper">
					<Link to={`/contacts/${contact.id}`} >
						{/*<img alt="avatar" src={faker.image.avatar()} />*/}
						<img src={`https://ui-avatars.com/api/?rounded=true&name=${strName}`} />
					</Link>
				</div>
				<div className="contact-info">
				  <Link to={`/contacts/${contact.id}`} style={{ textDecoration: 'none', fontSize: '20px' }}>{contact.name}</Link>
				  <p className="info-small">Email: {contact.email}</p>
				  <p className="info-small">Phone: {formatedPhone(contact.phone)}</p>
				</div>
				<div>
				<ButtonGroup size="small" aria-label="small outlined button group">
					<Link to={`/contacts/${contact.id}/update`} style={{ textDecoration: 'none'}}>
						<Button>Edit</Button>
					</Link>
				</ButtonGroup>
				</div>
			</div>
			<Link to='/contacts' style={{ textDecoration: 'none' }}>
				<Button variant="outlined" className="backToList" style={{ marginTop: '10px'}} >Back</Button>
			</Link>
		</div>
    )

	ContactDetail.propTypes = {
	  contact: PropTypes.object.IsRequired
	};
}


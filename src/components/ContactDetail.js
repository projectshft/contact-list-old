import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import faker from 'faker'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

export default function ContactDetail(props) {

	const contact = _.find(props.contacts, { id: props.contactId });

	console.log(contact)
	//need to replace blank with + to pass 
	//the string to the API to create an avanar with initials of the contact
	const replacedStr = (name, character) => {
		  return name.replace(/\s+/g, character);
	}
	let strNew = replacedStr(contact.name, '+');

	const useStyles = makeStyles(theme => ({
	  margin: {
	    margin: theme.spacing(1),
	  },
	  extendedIcon: {
	    marginRight: theme.spacing(1),
	  },
	}));

	const classes = useStyles();

    return (
    	
		<div className="contact" id={contact.id}>
			<div className="image-cropper">
				<Link to={`/contacts/${contact.id}`}>
					{/*<img alt="avatar" src={faker.image.avatar()} />*/}
					<img src={`https://ui-avatars.com/api/?rounded=true&name=${strNew}`} />
				</Link>
			</div>
			<div className="contact-info">
			  <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
			  <p>{contact.email}</p>
			  <p>{contact.phone}</p>
			</div>
			<div>
				<Link to={`/contacts/${contact.id}/update`}><Button size="small" className={classes.margin} variant="outlined" color="primary">Edit</Button></Link>
				<Link to={`/contacts/${contact.id}/`}><Button variant="contained">Delete</Button></Link>
			</div>
			<Link to='/contacts'><Button variant="contained" className="backToList" disableElevation>Back</Button></Link>
		</div>
    )

	ContactDetail.propTypes = {
	  contact: PropTypes.object.IsRequired
	};
}


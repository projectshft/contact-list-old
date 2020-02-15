import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import faker from 'faker'
import _ from 'lodash'

export default function ContactDetail(props) {

	const contact = _.find(props.contacts, { id: props.contactId });

	console.log(contact)
	//need to replace blank with + to pass 
	//the string to the API to create an avanar with initials of the contact
	const replacedStr = (name, character) => {
		  return name.replace(/\s+/g, character);
	}
	let strNew = replacedStr(contact.name, '+');

    return (
		<div className="comment" id={contact.id}>
			<div className="ui tiny image">
				<Link to={`/contacts/${contact.id}`}>
					{/*<img alt="avatar" src={faker.image.avatar()} />*/}
					<img src={`https://ui-avatars.com/api/?rounded=true&name=${strNew}`} />
				</Link>
			</div>
			<div className="content">
			  <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
	                <div>
	                  <Link to={`/contacts/${contact.id}/update`}>Edit</Link>
	                </div>
			  <p>{contact.email}</p>
			  <p>{contact.phone}</p>

			</div>
		</div>
    )
}

ContactDetail.propTypes = {
  contact: PropTypes.object
};
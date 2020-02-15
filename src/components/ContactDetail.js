import React from 'react'
import { Link } from 'react-router-dom'
import faker from 'faker'
import _ from 'lodash'

export default function ContactDetail(props) {

	const contact = _.find(props.contacts, { id: parseInt(props.contactId) });

	console.log(contact)
    return (
		<div className="comment">
			<div className="ui tiny image">
				<a href="/contacts" className="avatar">
					<img alt="avatar" src={faker.image.avatar()} />
				</a>
			</div>
			<div className="content">
			  <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
	                <div>
	                  <Link to={`/contacts/${contact.id}/update`}>Edit</Link>
	                </div>
			  Content A
			</div>
		</div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import faker from 'faker'

const ContactDetail = () => {
    return (
		<div className="ui container comments">
		  <div className="comment">
		    <div className="ui tiny image">
		    <a href="/" className="avatar">
	      		<img alt="avatar" src={faker.image.avatar()} />
	      		</a>
		    </div>
		    <div className="content">
		      Content A
		    </div>
		  </div>
		</div>
    )
}

export default ContactDetail;
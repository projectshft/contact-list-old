import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	// constructor() {
	// 	super()

	// 	this.state = {
	// 		contacts: []
	// 	}
	// 	this.addContact = this.addContact.bind(this);
	// }

	// addContact (contact) {
	// 	this.setState({contacts: this.state.contacts.concat([contact])});
	// }

	render() {
	  return (
	   <div className="Header">
			<h1 className="Header-title">React Rolodex</h1>
			<h2 className="Header-intro">
			Contacts:
			<Link to={'/new'}><button className="btn btn-primary">Add Contacts</button></Link>
			</h2>
		</div>
		)
	}
} 
export default Header


import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import ContactList from './Contact-List.js'

class Home extends Component {
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
	   <div className="Home">
			<header className="Home-header">
			<h1 className="Home-title">React Rolodex</h1>
			</header>
			<h2 className="Home-intro">
			Contacts:
			<Link to={'/new'}><button className="btn btn-primary">Add Contacts</button></Link>
			</h2>
		</div>
		)
	}
} 
export default Home


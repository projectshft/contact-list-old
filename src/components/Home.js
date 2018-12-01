import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import ContactList from './Contact-List.js'

class Home extends Component {
	constructor() {
		super()

		this.state = {
			contacts: [
				{ name: 'Karl Marx',
					phoneNumber: '561-665-0162',
					email: 'mfine@wesleyan.edu',
					image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isaac.Asimov01.jpg/440px-Isaac.Asimov01.jpg'
				}
			]
		}
		this.addContact = this.addContact.bind(this);
	}

	addContact(contact) {
		this.setState({contacts: this.state.contacts.concat([contact])});
	}

	render() {
	  return (
	   <div className="Home">
			<header className="Home-header">
			<h1 className="Home-title">React Rolodex</h1>
			</header>
			<h2 className="Home-intro">
			Contacts:
			<Link to={`/new`}><button className="btn btn-primary" onClick={event => (console.log(this.state.contacts))}>Add Contacts</button></Link>
			</h2>
			<ContactList contacts={this.state.contacts}/>
		</div>
		)
	}
} 
export default Home
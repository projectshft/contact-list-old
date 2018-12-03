import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

	  return (
	   <div className='container container-fluid'>
			<h1>React Rolodex</h1>
			<h2 className="Header-intro">
			Contacts:
			<Link to={'/contacts/new'}><button className="btn btn-primary">Add Contacts</button></Link>
			</h2>
		</div>
		)
	}

export default Header


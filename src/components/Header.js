import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom'


// Header for navigation and adding contacts

const Header = () => (
  <header>
    <h1 className="Contacts-title">Contact List</h1>
    <Link to="/contacts/new"><button type="button" className="btn btn-light btn-add">Add Contact</button></Link>
  </header>
  
)

export default Header
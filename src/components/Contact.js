import React from 'react';
import './App.css';
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'




const Contact = (props) => {
  const contact = props.getSpecificContact(parseInt(props.match.params.id,10))
  const handleXClick = () => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      props.deleteContact(contact)
      props.history.push('/')
    }
  }
  const backButton = () => {
    props.history.push('/')
  }
  const handleEditClick = () => {
    props.history.push(`/${contact.id}/edit`)
  }
  return (<div className="container-fluid">
    <div className="row ml-3">
      <button className="mb-2 btn btn-sm btn-primary" onClick={backButton}>
        Back
      </button>
    </div>
    <div className="row ml-3">
      <img src={contact.imageUrl} alt={`${contact.name}`}></img>
    </div>
    <div className="row ml-3">
      <h2>{contact.name}<button type="button" onClick={handleEditClick} className="ml-3 btn btn-sm btn-outline-primary">
        <span className="oi oi-pencil"></span>
      </button>
        <button type="button" onClick={handleXClick} className="ml-1 btn btn-sm btn-outline-danger">
          <span className="oi oi-x"></span>
        </button>
      </h2>

    </div>
    <div className="row ml-3">
      <h4>email: {contact.email}</h4>
    </div>
    <div className="row ml-3">
      <h4>phone number: {contact.number}</h4>
    </div>
  </div>)
}

export default Contact

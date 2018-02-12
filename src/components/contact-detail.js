import { Link } from 'react-router-dom';
import React from 'react';

const Contact = (props) => {
  if (!props.contact) {
    return (
      <div>
        <div className="row">
          <h1>New Contact</h1>
          <Link to={'/contacts'}>Back to Contacts List</Link>
        </div>
        <div className="row">
          <h3>Name:</h3>
          <div className="form-group">
            <input className="form-control" placeholder="John Doe"></input>
          </div>
        </div>
        <div className="row">
          <h3>Image URL:</h3>
          <div className="form-group">
            <input className="form-control" placeholder="http://www.example.com/picture.jpg"></input>
          </div>
        </div>
        <div className="row">
          <h3>Email:</h3>
          <div className="form-group">
            <input className="form-control" placeholder="jdoe@example.com"></input>
          </div>
        </div>
        <div className="row">
          <h3>Phone Number:</h3>
          <div className="form-group">
            <input className="form-control" placeholder="1-555-555-5555"></input>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-secondary">Save Changes</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="row">
          <h1>{props.contact.name}</h1>
          <Link to={'/contacts'}>Back to Contacts List</Link>
        </div>
        <div className="row">
          <h3>Name:</h3>
          <div className="form-group">
            <input className="form-control" defaultValue={props.contact.name}></input>
          </div>
        </div>
        <div className="row">
          <h3>Image URL:</h3>
          <div className="form-group">
            <input className="form-control" defaultValue={props.contact.imageUrl}></input>
          </div>
        </div>
        <div className="row">
          <h3>Email:</h3>
          <div className="form-group">
            <input className="form-control" defaultValue={props.contact.email}></input>
          </div>
        </div>
        <div className="row">
          <h3>Phone Number:</h3>
          <div className="form-group">
            <input className="form-control" defaultValue={props.contact.phoneNumber}></input>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-secondary">Save Changes</button>
        </div>
      </div>
    )
  }
}

export default Contact;

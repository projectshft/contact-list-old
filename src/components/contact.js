import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash'
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './Contacts'
import ContactsList from './contacts_list';

const SingleContact = (props) =>{

  const singleContact = _.find(props.contacts, { id: parseInt(props.props.match.params.id, 10) });

  console.log(singleContact);

  //test with console log to be sure click function is being invoked
  //onClick, pass props to callback function called deleteContact(contact) which is on App.js - key passed in references the index of the current state's contacts array (also in app.js)
  const handleDeleteButtonClick = ({key}) =>{
    console.log('delete button was clicked!');
    console.log(props);
    props.deleteContact(singleContact.id);
    window.location.assign("/");
  }


return (
  <div>
    <div class="card contact-card py-5" >
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><img src={singleContact.image_url}/></li>
        <li class="list-group-item">{singleContact.name} </li>
        <li class="list-group-item"> {singleContact.phone_number} </li>
        <li class="list-group-item"> {singleContact.email} </li>
        <li class="list-group-item">
          <button type="button" aria-label="Close" onClick={handleDeleteButtonClick}>
          <span aria-hidden="true">&times; delete </span>
          </button>
        </li>
      </ul>
      </div>
      <Link to='/contacts'>Back</Link>
    </div>
  )

}

export default SingleContact

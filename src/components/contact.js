import _ from 'lodash'
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './Contacts'
import ContactsList from './contacts_list';

const SingleContact = (props) =>{

  const singleContact = _.find(props.contacts, { id: parseInt(props.props.match.params.id, 10) });

  console.log(singleContact);

return (
    <div>
      <h1> {singleContact.name} </h1>

    </div>
  )

}

export default SingleContact

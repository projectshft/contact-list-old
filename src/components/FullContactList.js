import React, {Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {getState } from '../state';
import ContactListItem from './ContactListItem';


class FullContactList extends Component {
    contactList = getState('contacts').map((c,index) => {
      return (<ContactListItem key={c.id} contact={c} />
      )
    })
  render () {
    return (
      <Fragment>
      <ul className="col-md-4 list-group">
        {this.contactList}
      </ul>
      <Link to="/contacts/new" className="btn btn-primary">Add New Contact</Link>
      </Fragment>

    );
  };
}

export default FullContactList

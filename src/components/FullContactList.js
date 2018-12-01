import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { getState } from '../state';
import ContactListItem from './ContactListItem';

const FullContactList = () => {
  //forces a regeneration of the contact list whenever the list renders
  const newContactList = () =>
    getState('contacts').map((c) => <ContactListItem key={c.id} contact={c} />)

  return (
      <Fragment>
        <h1>Contacts</h1>
        <div className="row">
          {newContactList()}
        </div>
        <div className="add-new-btn">
        <Link to="/contacts/new" className="btn btn-primary btn-lg add-btn">Add New Contact</Link>
        </div>
      </Fragment>
    );
}

export default FullContactList

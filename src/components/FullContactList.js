import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { getState, sendEvent } from '../state';
import ContactListItem from './ContactListItem';
import Modal from "react-modal";

Modal.setAppElement('#root');

const FullContactList = () => {
  //forces a regeneration of the contact list whenever the list renders
  const newContactList = () =>
    getState('contacts').map((c) => <ContactListItem key={c.id} contact={c} />)

    //renders the modal only if the user has clicked a delete button
    const renderModal = () => {
      let contactToDelete;
      if (getState('showDeleteModal')) {
        contactToDelete = getState('selectedContact');
      }
      if (contactToDelete) {
        return (
          <Modal
                className = "delete-modal"
                overlayClassName="overlay"
                 closeTimeoutMS={250}
                 isOpen={getState('showDeleteModal')}
                 contentLabel="onRequestClose"
                 onRequestClose={this.cancelDelete}>
                <p>Are you sure you wish to delete {contactToDelete.name}?</p>
                <button className="btn btn-success modal-btn" onClick={() => sendEvent("deleteContact", contactToDelete)}>
                  Confirm Delete
                </button>
                <button className="btn btn-danger modal-btn" onClick={() => sendEvent('cancelDelete')}>
                  Never Mind
                </button>
            </Modal>
          )}
          else {
            return null;
          }
        }

  return (
      <Fragment>
        <h1>Contacts</h1>
        <div className="row">
          {newContactList()}
        </div>
        <div className="add-new-btn">
        <Link to="/contacts/new" className="btn btn-primary btn-lg add-btn">Add New Contact</Link>
        </div>
        {renderModal()}
      </Fragment>
    );
}

export default FullContactList

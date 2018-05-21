import React from 'react';
import {sendEvent, queryState} from '../state';

const ContactView = (props) => {
  // Loading the correct contact.
  let contact = queryState("findContact", parseInt(props.match.params.id, 10))

  // If provided image is not available, this function provides an alt img.
  const defaultErrorImg = (event) => {
    event.target.src = 'https://blog.sqlauthority.com/i/a/errorstop.png';
  }

  // Confirmation to delete contact.
  const deleteContact = () => {
    if (window.confirm('Delete ' + contact.name + '?')) {
      sendEvent("deleteContact", contact);
      props.history.push('/');
    }
  }

  const editContact = () => {
    props.history.push(`/edit/${contact.id}`)
  }

  const backButton = () => {
    props.history.push(`/`)
  }

  if (!contact) {
    return (<div>
      <h1 className="text-center">Contact Not Found</h1>
      <div className="row justify-content-center">
        <img src="http://www.img-academy.com/wp-content/uploads/2018/01/Error-404-3.jpg" alt="Not Found"/>
      </div>

      <div className="row justify-content-center">
        {/* Back button to contacts list */}
        <button className="col-2 justify-content-center normal-button" onClick={backButton}>Back</button>
      </div>
    </div>)
  }

  return (<div className="contact-view">
    {/* Back button to contacts list */}
    <div className="row justify-content-end">
      <button className="col-2 justify-content-center normal-button" onClick={backButton}>Back to contacts list</button>
    </div>
    <br/>
    {/* Contact Image */}
    <div className="row justify-content-center">
      <img className="contact-img" src={contact.imageUrl} onError={defaultErrorImg} alt={contact.name}/>
    </div>
    <br/>
    {/* Contact Name */}
    <div className="row justify-content-center">
      <h1>Name: {contact.name}</h1>
    </div>
    <br/>
    {/* Contact Phone Number */}
    <div className="row justify-content-center">
      <h4>Phone Number: {contact.phoneNumber}</h4>
    </div>
    <br/>
    {/* Contact Email */}
    <div className="row justify-content-center">
      <h4>Email: {contact.email}</h4>
    </div>
    <br/>
    {/* Delete and Edit Button */}
    <div className="row justify-content-center">
      <button className="normal-button col-2 justify-content-center mr-2" onClick={editContact}>Edit Contact</button>
      <button className="normal-button col-2 justify-content-center" onClick={deleteContact}>Delete Contact</button>
    </div>

  </div>)
}

export default ContactView;

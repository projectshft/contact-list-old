import React, {Fragment} from 'react';

const ContactDetail = ({routerProps, contacts, deleteContact}) => {
  const contact = contacts.find(c => c.id === parseInt(routerProps.match.params.id));

  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
          <div className="card contact-details">
            <img className="card-img-top contact-image" src={contact.image} alt={`${contact.name}`} />
            <div className="card-body">
              <h5 className="card-title contact-name">{contact.name}</h5>
              <p className="card-text contact-email">{contact.email}</p>
              <p className="card-text contact-phone">{contact.phone}</p>
              <a className="btn btn-sm btn-primary mr-2" href={`/contacts/${contact.id}/edit`}>Edit</a>
              <button className="btn btn-sm btn-danger" onClick={() => deleteContact(contact)}>Delete</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactDetail;
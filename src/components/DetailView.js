import React from 'react';

const DetailView = ({ contacts }) => {
  const currentContact = contacts.reduce((result, contact) => {
    result = contact;
    return result;
  }, {});

  return (
    <div className="row">
      <div className="col-6">
        {/* {contact.image_url === undefined && (
          <img className="headshot" src={contact.image_url} alt="" />
        )} */}
      </div>
      <div className="col-6">
        <h3>{currentContact.fname}</h3>
        <h3>{currentContact.lname}</h3>
        <h3>{currentContact.phone}</h3>
        <h3>{currentContact.email}</h3>
      </div>
    </div>
  );
};

export default DetailView;

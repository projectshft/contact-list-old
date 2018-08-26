import React from 'react'
import { Link } from 'react-router-dom'
import Individual from './Id'

const Contacts = (props) => {
  const contactItems = props.contactList.map((newContact, index) => {
  return (
    <Individual key = {index} contact = {newContact} />
  )
});
  return (
  <div>
    <ul className="col-md-4 list-group">
      <div>
        <Link to = {`/Add`}> Add Contact </Link>
      </div>
  <br />
    {contactItems}
  <br />
      <div>
        <Link to = {`/`}> Back to Home </Link>
      </div>
    </ul>

  </div>
  );
};

export default Contacts;

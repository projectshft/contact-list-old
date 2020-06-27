import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import _ from 'lodash'


const Person = ({personId, contacts}) => {
  const contact = _.find(contacts, { id: personId });

  if (!contact) {
    return <div><br/>&nbsp; &nbsp; Sorry, but that contact was not found ¯\_(ツ)_/¯ 
      <br/>
      <br/>
      &nbsp; &nbsp; &nbsp; 
      <Link to="/contacts"><button type="button" className="btn btn-secondary">Previous Page</button></Link>
    </div>
    }
    return (
    <div className="Person-info">
      <br/>
        <span><img className="image" alt="contact headshot" src={contact.image_url}/></span>
      <br/>
        <span><h2>{contact.name}</h2></span>
        <span><h4>{contact.phone}</h4></span>
        <span><h5>{contact.email}</h5></span>
      <br/>
      <br/>
        <Link to="/contacts"><button type="button" className="btn btn-primary">Previous Page</button></Link>
    </div>
  );
}

//using prop validation to determine if data is of a certain type
Person.propTypes = {
  person: PropTypes.object.isRequired
};

export default Person;

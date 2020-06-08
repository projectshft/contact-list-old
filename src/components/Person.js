import React from 'react';
import PropTypes from 'prop-types';

const Person = (props) => {
    return (
      <div className="person">
        <span>{props.contact.image_url}</span>
        <span>({props.contact.name})</span>
        <span>({props.contact.phone})</span>
        <span>({props.contact.email})</span>
      </div>
    );
  }



//using prop validation to determine if data is of a certain type
Person.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};


export default Person;

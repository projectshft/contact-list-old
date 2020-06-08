import React from 'react';
import PropTypes from 'prop-types';

const Person = (props) => {
    return (
      <div className="person">
        <span>{props.person.image_url}</span>
        <span>({props.person.name})</span>
        <span>({props.person.phone})</span>
        <span>({props.person.email})</span>
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

import React from 'react';
import PropTypes from 'prop-types';
import '../Person.css';

const Person = (props) => {
  console.log('The person is', props.person )
    return (
      <div className="Person_info">
        <span><img className="rounded float-right" src={props.person.image_url}/></span>
        <br></br>
        <span>{props.person.name}</span>
        <br></br>
        <span>{props.person.phone}</span>
        <br></br>
        <span>{props.person.email}</span>
      </div>
    );
  }



//using prop validation to determine if data is of a certain type
Person.propTypes = {
  person: PropTypes.object.isRequired
};


export default Person;

import React from 'react';
import PropTypes from 'prop-types';
import '../Person.css';

const Person = (props) => {
  console.log('The person is', props.person )
    return (
      <div className="Person_info">
        <span><img className="image" alt="contact headshot" src={props.person.image_url}/></span>
        <br/>
        <span>{props.person.name}</span>
        <br/>
        <span>{props.person.phone}</span>
        <br/>
        <span>{props.person.email}</span>
        <br/>
        {/* TODO */}
        <button type="button" className="btn btn-primary edit-contact">Edit</button>
        <button type="button" className="btn btn-primary delete-contact">Delete</button>

      </div>
    );
  }



//using prop validation to determine if data is of a certain type
Person.propTypes = {
  person: PropTypes.object.isRequired
};


export default Person;

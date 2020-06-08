import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  render() {
    return (
      <div className="person">
        <span>{this.props.image_url}</span> <span>({this.props.name})</span> <span>({this.props.phone})</span>
      </div>
    );
  }
}


//using prop validation to determine if data is of a certain type
Person.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired
};


export default Person;

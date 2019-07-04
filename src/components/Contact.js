import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { PropTypes } from 'prop-types';

const Contact = ({props, contacts, editContact}) => {
 

  return (
    <div>
      <Link to='/contacts'>Back</Link>
    </div>
  );
};

Contact.propTypes = {
  contacts: PropTypes.array,
  editContact: PropTypes.func
};

export default Contact;
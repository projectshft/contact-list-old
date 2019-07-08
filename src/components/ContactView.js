import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactView extends React.Component {

  render() {
    // Component receives only the contact that matches the params id. 
    // Initialize 'contact' for ease of reference. 
    const contact = this.props.contact;

    return (
      <div>
        <div className='page-title'>
          Contact Details
        </div>
        <div>
          <button className="btn btn-light"><Link to='/'>&laquo; Back to Contacts</Link></button>
        </div>
        <div className="item-view">
          <div className="img-container-view">
            <img className="img-thumbnail img-view" src={contact.image_url} alt="" />
          </div>
          <div className="content-container-view">
            <div className="name-view">
              {contact.name}
            </div>
            <div>
              {contact.email}
            </div>
            <div>
              {contact.phone_number}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ContactView.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired
  }).isRequired
};

export default ContactView; 
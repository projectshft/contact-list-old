import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class ContactView extends React.Component {

  render() {
    //console.log(this.props.contactId);
    //console.log(this.props.contact); 
    //console.log(this.props.getContactById(Number(this.props.contactId)));
    // const thisId = Number(this.props.props.match.params.id);
    // const contacts = this.props.contacts;
    // const contact = contacts.find((contact) => { return contact.id === thisId; });
    const contact = this.props.contact;

    return (
      <div>
        <div>
          View Contact
        </div>
        <div className="img-container-view">
          <img className="img-thumbnail img-view" src={contact.image_url} alt="" />
        </div>
        <div>
          {contact.name}
        </div>
        <div>
          {contact.email}
        </div>
        <div>
          {contact.phone_number}
        </div>
        <button><Link to='/'>Back</Link></button>
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
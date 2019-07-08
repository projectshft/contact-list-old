import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sendEvent } from './State';

class Contacts extends React.Component {

  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  // Use the onError function attribute to replace a broken image url with the default 
  // (form validation in ContactNew/ContactEdit would be preferable but that's trickier). 
  handleImageError(e) {
    e.preventDefault();
    const thisId = e.target.dataset.id;
    sendEvent('setContactImgToDefault', thisId);
  }

  // Get confirmation in order to delete a contact 
  // (specify contact name in message for better user experience). 
  handleDelete(e) {
    e.preventDefault();
    const thisId = e.target.dataset.id;
    if (window.confirm(`Delete ${e.target.dataset.name} from contacts?`)) {
      sendEvent('deleteContact', thisId);
    }
  }

  render() {
    // Map each contact to a display item (with view/edit links and delete button) and store as 'list'. 
    const contacts = this.props.contacts;
    const list = contacts.map((contact) => (
      <div key={contact.id} className="item">
        <div className="img-container">
          <img onError={this.handleImageError} data-id={contact.id} className="img-thumbnail" src={contact.image_url} alt="" />
        </div>
        <div className="content-container">
          <div className="item-name"> <Link to={`/${contact.id}`}>
            {contact.name}
          </Link> </div>
          <div className="item-btns">
            <button className="btn btn-light">
              <Link to={`/${contact.id}/edit`}>
                Edit
            </Link>
            </button>
            <button className="btn btn-light" data-id={contact.id} data-name={contact.name} onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className='page-title'>
          Contacts
        </div>
        <div>
          <button className="btn btn-light"><Link to='/new'>Add Contact</Link></button>
        </div>
        <div className="items-container">
          {list}
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Contacts; 
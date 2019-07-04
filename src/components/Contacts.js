import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { sendEvent } from './State';

class Contacts extends React.Component {

  constructor() {
    super()

    this.handleDelete = this.handleDelete.bind(this);
  }

  // handleDelete(event) {
  //   event.preventDefault();
  //   const thisId = Number(event.target.value);
  //   const contacts = this.props.contacts;
  //   const contact = contacts.find((contact) => { return contact.id === thisId; });
  //   const name = contact.name;
  //   if (window.confirm(`Delete ${name} from contacts?`)) {
  //     this.props.deleteContact(thisId);
  //   }
  //   //this.props.deleteContact(thisId);
  // }

  handleDelete(e) {
    e.preventDefault();
    const thisId = Number(e.target.value);
    if (window.confirm(`Delete from contacts?`)) {
      sendEvent('deleteContact', thisId);
    }
  }

  render() {

    const contacts = this.props.contacts;
    const list = contacts.map((contact) => (
      <div key={contact.id} className="item">
        <div className="img-container">
          <img className="img-thumbnail" src={contact.image_url} alt="" />
        </div>
        <div className="content-container">
          <div className="item-name"> <Link to={`/${contact.id}`}>
            {contact.name}
          </Link> </div>
          <button>
            <Link to={`/${contact.id}/edit`}>
              Edit
            </Link>
          </button>
          <button value={contact.id} onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    )
    );

    return (
      <div>
        <div className='page-title'>
          <h2>Contacts</h2>
        </div>
        <div>
          <button><Link to='/new'>Add Contact</Link></button>
        </div>
        <div className="items-container">
          {list}
        </div>
      </div>
    )
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
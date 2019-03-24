/*******************************************
   A component for individual contacts
   * ****************************************/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  /*******************************************
   * For TYPECHECKING. Can be done this way, inside the class, or outside of it. See below.
   * ****************************************/
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   image_url: PropTypes,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };
  state = {
    showContactInfo: false
  };

  // A Method to handle a click on a contact name in Contact List
  // Pass in id?
  onNameClick = (id, e) => {
    console.log('Name clicked');
    console.log(this.state);
    console.log(e.target);
    console.log(id);
    // this.setState({ showContactInfo: false });

    // Create a toggle to change whether an individual contact shows contact info or just the name.
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  // Define onDeleteClick (using an arrow function, in contrast to onNameClick above. (Just to learn both ways.)
  onDeleteClick = () => {
    console.log('Notification from Contact: Delete clicked');
    // Create a click handler (PropType, so define below)
    this.props.deleteClickHandler();
  };
  render() {
    // Use destructuring to pull out data
    // TODO: add image_url
    const { name, id, email, phone } = this.props;

    // In order for toggle on showContactInfo to work, use destructuring to take out necessary data from this.state:
    const { showContactInfo } = this.state;
    return (
      // Add bootstrap styling to rolodex card.
      <div className="card card-body mb-3">
        {/* ************************
          This way prior to inserting the destructuring line above:
          ******************************
          <h4>Name: {this.props.name}</h4>
          <ul>
            <li> {this.props.image_url} </li>
            <li>Email: {this.props.email}</li>
            <li>Phone: {this.props.phone}</li>
          </ul> 
          ***************************
          Now this way, enabled by the destructuring line above:
          ***************************/}
        {/* <strong> */}
        {/* <h4 onClick={this.onNameClick}> */}
        {/*  <h4 onClick={this.onNameClick.bind(this)}> */}
        <h4>
          {name} <span> </span>
          <i
            onClick={this.onNameClick.bind(this, id)}
            className="fas fa-chevron-right"
            // Styling: add pointer
            style={{ cursor: 'pointer', color: '#17a2b8' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: '#17a2b8' }}
            // Add click handler
            onClick={this.onDeleteClick}
          />
          {/* <i class="fas fa-expand" /> */}
          {/* <i class="far fa-arrow-alt-circle-right" /> */}
          {/* Can also 'emove the onNameClick defition above and just use an arrow function here:
            onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} */}
        </h4>
        {/* </strong> */}

        {/* Toggle view of contact info or not, based on boolean value of showContactInfo */}
        {showContactInfo ? (
          <ul className="list-group">
            {/* <li className="list-group-item">{image_url}</li> */}
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
            <li className="list-group-item">ID: {id}</li>
          </ul>
        ) : null}
        {/* PS assignment calls for navigation to "/contacts/{id of contact}"" and show data for just that contact */}
      </div>
    );
  }
}

// For TYPECHECKING and validation/requirements
// Doesn't have to be done this way. Can also be done in the class. See above, right above the render. For this way, just take the class name and do .propTypes.
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  // image_url: PropTypes,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.number,
  // id: PropTypes.number.isRequired
  deleteClickHandler: PropTypes.func.isRequired
};
// If you have default props, you can do the same thing: Contact.default.props here, or use "static" to define them above.

// Now that the object as brought in as a whole, the PropType must be changed to the object contact:
// Contact.propTypes = {
//   contact: PropTypes.object.isRequired
// };

export default Contact;

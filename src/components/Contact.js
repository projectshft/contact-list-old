// import React, { Component } from 'react';

// class Contact extends Component {
//   render() {
//     // Use destructuring to pull out data. Is id necessary here?
//     const { id, name, image_url, email, phone } = this.props;
//     return (
//       <div>
//         <h4>{name}</h4>
//         <ul>
//           <li>Image: {image_url}</li>
//           <li>Email: {email}</li>
//           <li>Phone: {phone}</li>
//         </ul>
//       </div>
//     );
//   }
// }
// export default Contact;
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
  render() {
    // Use destructuring to pull out data
    // TODO: add image_url
    const { name, id, email, phone } = this.props;
    return (
      // Add bootstrap styling to card.
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
        <h4>
          <strong>{name}</strong>
        </h4>
        <ul className="list-group">
          {/* <li className="list-group-item">{image_url}</li> */}
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
          {/* <li className="list-group-item">ID: {id}</li> */}
        </ul>
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
  id: PropTypes.number
  // id: PropTypes.number.isRequired
};
// If you have default props, you can do the same thing: Contact.default.props here, or use "static" to define them above.

// Now that the object as brought in as a whole, the PropType must be changed to the object contact:
// Contact.propTypes = {
//   contact: PropTypes.object.isRequired
// };

export default Contact;

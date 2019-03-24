/************************
 * A Header for layout/design purposes. A functional component. No state.
 *************************/

/************************
 * A Header for layout/design purposes. A functional component. No state.
 *************************/
import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  // Create a variable for branding
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3">
      <div className="container">
        {/* Use "/" for href because we will be using a router */}
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
              {/* <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add contact
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
      {/* <div>
    <h1>{props.branding}</h1>
    </div>*/}
    </nav>
  );
};

// Use defaultProps for practice.

Header.defaultProps = { branding: 'Contact-List App' };
// If the property "psTitle" were removed from the Header component in the App.js file, then "Contact-List App" would now be the default header. But anything we pass in is going to override that.

/*************************
 * TYPECHECKING
 *************************/
// For PropTypes we want to validate the data that is coming in. So Take the PropTypes object and say it's a string, and that it (a string) is required.
Header.propTypes = { branding: PropTypes.string.isRequired };
// Now we have a PropType

export default Header;

//  import React from 'react';

// const Header = props => {
//   return (
//     <div>
//       <h1>{props.psTitle}</h1>
//     </div>
//   );
// };

// export default Header;

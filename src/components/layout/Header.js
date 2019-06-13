/************************
 * A Header for layout/design purposes. A functional component. No state.
 *************************/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  // Create a variable for branding
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3">
      <div className="container">
        {/* Use "/" for href because router will be used */}
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                {' '}
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about/" className="nav-link">
                {' '}
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Use defaultProps for practice.

Header.defaultProps = { branding: 'Contact-List App' };
// If the property "psTitle" were removed from the Header component in the App.js file, then "Contact-List App" would now be the default header. But anything passed in is going to override that.

/*************************
 * TYPECHECKING
 *************************/
// For PropTypes validate the data that is coming in.
Header.propTypes = { branding: PropTypes.string.isRequired };

export default Header;

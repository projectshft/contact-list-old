import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav
      className="navbar bg-dark navbar-dark navbar-expand-sm mb-3 py-0"
      style={{ height: '60px' }}
    >
      <div className="container-fluid mx-5">
        <h2 style={{ color: '#fff' }}>React Contact List</h2>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/contacts" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-contact" className="nav-link">
                Add+
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// some notes on bootstrap:
// mb-3 = margin bottom 3 (3 = 1rem in bootstrap)
// py-0 = padding y-axis none
//navebar-expand aligns buttons horizontally
// navbar-nav removes the list-y features of the li (dot, spacing,...)
// nav-link stylizes the text
// a tag makes the text blue by default, navbar-dark overrides that to make it a lighter color

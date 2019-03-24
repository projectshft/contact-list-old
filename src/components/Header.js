import React from 'react';

const Header = () => {
  return (
    <nav
      className="navbar bg-dark navbar-dark navbar-expand-sm mb-3 py-0"
      style={{ height: '60px' }}
    >
      <div className="container-fluid mx-5">
        <h2 style={{ color: '#fff' }}>Contact List</h2>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Add+
              </a>
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

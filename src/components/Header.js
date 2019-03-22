import React from 'react';


//Header that will have the title and add contact button
const Header = (props) => {
  return (
    <nav className='navbar navbar-dark bg-dark mb-3 py-0'>
      <div className="container">
        <a href="/" className="navbar-brand">Mariel's Contacts</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <i className="fas fa-user-plus" style={{cursor: "pointer", color:"#eee"}}></i>
              {/* <i className="fas fa-home" style={{cursor: "pointer", color:"#eee"}}></i> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
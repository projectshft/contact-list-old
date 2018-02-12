import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => (
  <section>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/topics">Non existing</Link></li>
      </ul>
    </nav>
    <hr />
    {children}
  </section>
)

export default Layout
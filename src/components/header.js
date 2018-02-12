import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => (
      <ul className="navigation grid grid-gutters large-grid-fit med-grid-fit small-grid-1of2">
        <li className="grid-cell">
          <Link className="navigation-link navigation-brand" to="/">
            Home
          </Link>
          --
          <Link className="navigation-link" to="/list">
            <i className="fa fa-comments"></i> Edit List
          </Link>
           --
          <Link className="navigation-link" to="/edit">
            <i className="fa fa-comments"></i> Add Contact
          </Link>
        </li>
      </ul>
)


export default Header

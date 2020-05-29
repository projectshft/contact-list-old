import React, { Component } from 'react';//this will not be a static page
import { Link } from 'react-router-dom';

class Contacts extends Component {

    render() {
      return (
        <div className="contacts">
        <h1>Contacts</h1>
          <ul>
            <Link to="/contact"><li>Christina</li></Link>
            <Link to="/contact"><li>Brian</li></Link>
            <Link to="/contact"><li>Marisa</li></Link>
          </ul>
          <Link to="/contacts/new"><button type="button" className="btn btn-primary">Add Contact</button></Link>
        </div>

      )
    }


}
export default Contacts;

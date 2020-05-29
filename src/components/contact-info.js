import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactInfo extends Component {

    render() {
      return (
        <div className="contact">
            <p>Individual contact info here</p>
            <Link to="/">Back</Link>
        </div>

      )
    }


}
export default ContactInfo;

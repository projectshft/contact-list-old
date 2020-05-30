import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddContacts extends Component {
  render() {
    return (
      <form className ="contact-form">
        <h3>Add New Contact</h3>

          <div className="form-group">
            <input type="text" id="name" className="form-control" placeholder="Name"/>
              <br/>

            <input type="text" id="phone" className="form-control" placeholder="Image"/>
              <br/>

            <input type="text" id="phone" className="form-control" placeholder="Email"/>
              <br/>

            <input type="text" id="phone" className="form-control" placeholder="Phone Number"/>
              </div>

            <Link to="/"><button type="button" className="btn btn-primary">Add</button></Link>

        </form>
    )
  }
}
export default AddContacts;

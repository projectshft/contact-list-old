import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import SingleContact from './contact';
import _ from 'lodash';
import ContactsList from './contacts_list';

class UpdateContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: props.name || '',
      image: props.image || '',
      email: props.email || '',
      phone: props.phone || ''

    }

console.log(this.state);
console.log(props)

  }


render()
{
  return (


  <div>

              <h1>Edit Contact</h1>

                <div class="form-group" className="update-contact-form">
                  <label>Name</label>
                  <input className="form-control" placeholder="Name"
                    value={this.state.name}
                    onChange={event => this.setState({name:event.target.value})}/>
                </div>

                <div class="form-group" className="update-contact-form">
                  <label>Email</label>
                  <input
                    className="form-control" placeholder="Email"
                    value={this.state.email}
                    onChange={event => this.setState({email: event.target.value})}/>
                </div>

                <div class="form-group" className="update-contact-form">
                  <label>Phone</label>
                  <input
                    className="form-control"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={event => this.setState({phone:event.target.value})}/>
                </div>

                <div class="form-group" className="update-contact-form">
                  <label>Image Url</label>
                    <input
                    className="form-control" placeholder="Image"
                    value={this.state.image}
                    onChange={event => this.setState({image:event.target.value})}/>
                </div>

                    <button onClick={this.handleClick} type="button" className="btn btn-primary update-contact">Edit Contact</button>

    </div>

    );
  }
}

export default UpdateContactForm;

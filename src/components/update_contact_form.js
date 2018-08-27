import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Contact from './contact';
import _ from 'lodash'

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
    <div class="container form-container">
      <div class="row" >

        <div class="col-2"> </div>

        <div class="col-8">
          <div class="card text-white p-2 bg-secondary">
            <div class="card-body">

              <h1>Edit Contact</h1>

                <div class="form-group" className="new-contact-form">
                  <label>Name</label>
                  <input className="form-control" placeholder="Name"
                    value={this.state.name}
                    onChange={event => this.setState({name:   event.target.value})}/>
                </div>

                <div class="form-group" className="new-contact-form">
                  <label>Email</label>
                  <input
                    className="form-control" placeholder="Email"
                    value={this.state.email}
                    onChange={event => this.setState({email: event.target.value})}/>
                </div>

                <div class="form-group" className="new-contact-form">
                  <label>Phone</label>
                  <input
                    className="form-control"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={event => this.setState({phone:event.target.value})}/>
                </div>

                <div class="form-group" className="new-contact-form">
                  <label>Image Url</label>
                    <input
                    className="form-control" placeholder="Image"
                    value={this.state.image}
                    onChange={event => this.setState({image:event.target.value})}/>
                </div>

                    <button onClick={this.handleClick} type="button" className="btn btn-primary add-new-contact">Add Contact</button>

                    </div>
                    <div class="col-2"> </div>
                    </div>
                    </div>
                    </div>
                    </div>
      </div>

    );
  }
}

export default UpdateContactForm;

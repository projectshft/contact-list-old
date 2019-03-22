import React, { Component } from 'react'

//create New Contact

class NewContact extends Component {
  constructor () {
    super()

    this.state = {
      id: '',
      name: '',
      email: '',
      phone: '',
      imgUrl: '' 
    }

    this.handleContactSubmit = this.handleContactSubmit.bind(this)
  }
  
  handleContactSubmit (e) {
    e.preventDefault();

    const newContact = {
      id: Math.round(Math.random() * 100000000),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      imgUrl: this.state.imgUrl
    }

    console.log(newContact)
   
  }
  


  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type= "text"
                name="name"
                className="form-control form-control-lg" placeholder="Enter Name"
                onChange={event => this.setState({ name: event.target.value})}
                />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type= "email"
                name="email"
                className="form-control form-control-lg" placeholder="Enter Email"
                onChange={event => this.setState({ email: event.target.value})}
                />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type= "text"
                name="phone"
                className="form-control form-control-lg" placeholder="Enter phone number"
                onChange={event => this.setState({ phone: event.target.value})}
                />
            </div>

            <div className="form-group">
              <label htmlFor="photo">Upload a Picture</label>
              <input 
                type= "text"
                name="photo"
                className="form-control form-control-lg" placeholder="Enter a picture link"
                onChange={event => this.setState({ imgUrl: event.target.value})}
                />
            </div>

            <input type="submit" value="Add Contact" className="btn btn-block btn-light" onClick={this.handleContactSubmit}/>

          </form>
        </div>
      </div>
    )
  }
}
export default NewContact

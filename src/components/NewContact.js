import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//create New Contact
class NewContact extends Component {
  constructor () {
    super()

    this.state = {
      id: '',
      name: '',
      email: '',
      phone: '',
      imgUrl: '',
      nameError: '',
      emailError: '',
      phoneError:'',
    }

    //bind this to work with handleChange
    this.handleChange = this.handleChange.bind(this)
    //bind this to work with handleContact Submit
    this.handleContactSubmit = this.handleContactSubmit.bind(this)
  }

  handleChange = e =>{

  }

  validate = () => {
    let nameError= '';
    let emailError= '';
    let phoneError='';

    if (this.state.name < 1) {
      nameError = "Please enter a valid name"
    }

    if (!this.state.email.includes('@')) {
      emailError = "Please enter a valid email"
    }

    if (this.state.phone.length != 10) {
      phoneError = "Please enter a valid phone number"
    }

    if (phoneError || emailError || nameError) {
      this.setState({ phoneError, nameError, emailError });
      return false;
    }

    return true;
  }
  
  handleContactSubmit (e) {
    e.preventDefault();

    const { name, email, phone, imgUrl } = this.state
    const isValid = this.validate();

    if (isValid) {
      const newContact = {
        id: Math.round(Math.random() * 100000000),
        name,
        email,
        phone,
        imgUrl
      }

      //add new contact to state
    this.props.addContact(newContact)

    //automatically load contacts page
    this.props.history.push('/contacts');
    }

  }
  


  render() {

    return (
      <div className="container">
        <div className="card mb-3" style={{ width: "30rem"}}>
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text"
                  name="name"
                  className="form-control" 
                  placeholder="full name"
                  onChange={event => this.setState({ name: event.target.value})}
                  />
                  <div className="is-invalid" style={{color: "red"}}>{this.state.nameError}</div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email"
                  name="email"
                  className="form-control" placeholder="email address"
                  onChange={event => this.setState({ email: event.target.value})}
                  />
                  <div className="is-invalid" style={{color: "red"}}>{this.state.emailError}</div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="text"
                  name="phone"
                  className="form-control" placeholder="phone number"
                  onChange={event => this.setState({ phone: event.target.value})}
                  />
                  <div className="is-invalid" style={{color: "red"}}>{this.state.phoneError}</div>
              </div>

              <div className="form-group">
                <label htmlFor="photo">Upload a Picture</label>
                <input 
                  type="text"
                  name="photo"
                  className="form-control" placeholder="picture url"
                  onChange={event => this.setState({ imgUrl: event.target.value})}
                  />
              </div>

              <input type="submit" value="Add Contact" className="btn btn-block btn-outline-info" onClick={this.handleContactSubmit}/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(NewContact)

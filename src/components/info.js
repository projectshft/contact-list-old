import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//This component will display detailed information and allow editing of contacts
//the props are: the contact list (to match the given URL to the keys in the contact list), and router props
class Info extends Component {

  constructor(props) {
    super(props)
    //initializes with a 'temporary state' that will be different from the main state until edits are confirmed
    this.state = {
      currentContact: null,
      editMode: false
    }

    this.getPersonById = this.getPersonById.bind(this)
    this.updateState = this.updateState.bind(this)
    //either mounts the state (if its a first page load) or re-sets the state to a new contact
    this.getPersonById();

  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode })
  }

  getPersonById = () => {
    let contactID = this.props.match.params.id
    let thisPerson = this.props.contacts.find(person => person.key === Number(contactID));
    if (!this.state.currentContact) {
      this.state = { currentContact: thisPerson }
    }
    else {
      this.setState({ currentContact: thisPerson })
    }
  }


  //this function is necessary because currentContact is nested inside the state, so a new copy of the state is made
  //and then used to update the APP state with the new value
  updateState = (property, value) => {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.currentContact[property] = value;
    console.log(value)
    console.log(stateCopy)
    this.setState({ ...stateCopy })
  }

  _emailValidation(emailString) {
    console.log(emailString)
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(emailString)) {
      return true
    } else {
      return false
    }
  }
  //Two different views, based on if the page is in edit mode or not
  render() {

    let { currentContact } = this.state

    if (!this.state.editMode) {

      return (
        <div>
          <div className="details">
            <img src={currentContact.imgUrl} alt="" />
            <h1>{currentContact.firstName} {currentContact.lastName}</h1>
            <p>{currentContact.email}</p> <p>{currentContact.phone}</p>
            <button className="btn btn-info" onClick={() => { this.toggleEditMode() }}>Edit Contact</button>
            <Link to="/contacts"> Back </Link>
          </div>
        </div>
      )
    } else {

      return (
        <div>
          <div className="row add-contact">
            <div className="col-md-9">
              <label>First Name</label>
              <input type="text" className="form-control" value={currentContact.firstName}
                onChange={event => this.updateState('firstName', event.target.value)} />
            </div>

            <div className="col-md-9">
              <label>Last Name</label>
              <input type="text" className="form-control" value={currentContact.lastName}
                onChange={event => this.updateState('lastName', event.target.value)} />
            </div>

            <div className="col-md-9">
              <label>Email</label>
              <input type="text" className="form-control" value={currentContact.email}
                onChange={event => this.updateState('email', event.target.value)} />
            </div>
            <div className="col-md-9">
              <label>Phone #</label>
              <input type="text" className="form-control" value={currentContact.phone}
                onChange={event => this.updateState('phone', event.target.value)} />
            </div>
            <div className="col-md-9">
              <label>Pic URL</label>
              <input type="text" className="form-control" value={currentContact.imgUrl}
                onChange={event => this.updateState('imgUrl', event.target.value)} />
              <br />
            </div>
          </div>
          <button className="btn btn-success" onClick={() => {
            if (!this._emailValidation(currentContact.email)) {
              alert("Invalid Email");
              return
            }
            if (!currentContact.firstName && !currentContact.lastName) {
              alert("Enter at least a first or last name");
              return
            }
            this.toggleEditMode()
          }}>Confirm Edit</button>
        </div>
      )
    }
  }
}

export default Info

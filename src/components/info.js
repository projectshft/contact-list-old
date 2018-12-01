import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



class Info extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentContact: null,
      editMode: false,
      editFirstName: '',
      editLastName: '',
      editEmail: '',
      editPhone: '',
      editImgUrl: ''
    }
    this.sendEditInfoToState = this.sendEditInfoToState.bind(this)
    this.getPersonById = this.getPersonById.bind(this)
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

  sendEditInfoToState = () => {
    let editedContactObject = {
      firstName:this.state.currentContact.firstName,
      lastName:this.state.currentContact.lastName,
      email:this.state.currentContact.email,
      phone:this.state.currentContact.phone,
      imgUrl:this.state.currentContact.imgUrl
    }
    this.props.editContact(editedContactObject)
  } 


  render() {

    let { currentContact } = this.state

    if (!this.state.editMode) {

      return (
        <div>
          <img src={currentContact.imgUrl} alt="" />
          <h1>{currentContact.firstName} {currentContact.lastName}</h1>
          <p>{currentContact.email}</p> &nbsp; <p>{currentContact.phone}</p>
          <button onClick= {() =>{this.toggleEditMode()}}>Edit Contact</button>
        </div>
        )
    } else {

      return(
        <div>
          <div className="row add-contact">
            <div className="col-md-9">
              <label>First Name</label>
              <input type="text" className="form-control" value={currentContact.firstName} onChange={event => this.setState(
                {...this.state.currentContact, firstName: event.target.value }
              )} />
            </div>

            <div className="col-md-9">
              <label>Last Name</label>
              <input type="text" className="form-control" value={currentContact.lastName} onChange={event => this.setState(
                { editLastName: event.target.value }
              )} />
            </div>
            <div className="col-md-9">
              <label>Email</label>
              <input type="text" className="form-control" value={currentContact.email} onChange={event => this.setState(
                { editEmail: event.target.value }
              )} />
            </div>
            <div className="col-md-9">
              <label>Phone #</label>
              <input type="text" className="form-control" value={currentContact.phone} onChange={event => this.setState(
                { editPhone: event.target.value }
              )} />
            </div>
            <div className="col-md-9">
              <label>Pic URL</label>
              <input type="text" className="form-control" value={currentContact.imgUrl} onChange={event => this.setState(
                { editImgUrl: event.target.value }
              )} />
              <br />
            </div>
          </div>
          <button onClick={() => {this.toggleEditMode()
            this.sendEditInfoToState()}}>Confirm Edit</button>
        </div>
      )
    }
  }
}

export default Info

//<Route path='/' render={(props) => <Info props={props} contacts={this.state.contacts} />} />

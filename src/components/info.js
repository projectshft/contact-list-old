import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



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
    console.log(props)
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
  //gathers edit data and updates main state - which will then update this state - hopefully


  //This code is not being used, because the App State gets updated with every input,
  //despite making a cope of the app state before passing the contact list into props.
  // sendEditInfoToState = () => {
  //   let editedContactObject = {
  //     firstName:this.state.currentContact.firstName,
  //     lastName:this.state.currentContact.lastName,
  //     email:this.state.currentContact.email,
  //     phone:this.state.currentContact.phone,
  //     imgUrl:this.state.currentContact.imgUrl
  //   }
  //   this.props.editContact(editedContactObject)
  // } 
//this function is necessary because currentContact is nested inside the state, so a new copy of the state is made
//and then used to update the state with the new value
  updateState = (property, value) => {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.currentContact[property] = value;
    console.log(value)
    console.log(stateCopy)
    this.setState({...stateCopy})
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
          <button onClick={() => {this.toggleEditMode()
            this.toggleEditMode()}}>Confirm Edit</button>
        </div>
      )
    }
  }
}

export default Info

//<Route path='/' render={(props) => <Info props={props} contacts={this.state.contacts} />} />

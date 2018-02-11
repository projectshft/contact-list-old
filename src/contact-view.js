import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class ContactView extends Component {
  constructor(props) {
    super(props)

    //state should contain contact values and a boolean indicating whether this contact is already in the contacts array (update) or not (add)

    //if findContact returns null or undefined, contact was not in the contacts array and contact is new
    let contactDetails = this.findContact(props);
    if (contactDetails) {
      this.state = {...contactDetails, contactIsNew: false}
    } else {
      this.state = {
          id: this.generateId(props),
          name: 'Q. Dogs',
          imageUrl: 'https://i.pinimg.com/736x/97/27/a5/9727a533b8d35ec176155e92fd643477--pet-tattoos-wall-tattoo.jpg',
          email: 'qdogs@example.com',
          phoneNumber: '123-456-7890',
          contactIsNew: true
      }
    }
  }

    //helper function to generate unique ID for each contact
  generateId (props) {
      //when generating pseudorandom ID, check to make sure it is unique. regenerate if it isn't.
      let id = Math.round(Math.random() * 10000);
      //condition returns true only if another contact has the same id
      let idIsDuplicate = props.contacts.find((contact) => {return contact.id === id})

      while (idIsDuplicate) {
        id = Math.round(Math.random() * 10000);
      }
      return id;
    }

  //helper function to find the correct contact within our props array
  findContact (props) {
    //match.params grabs the router's id parameters, which uniquely identify the selected contact
    let id = props.match.params.id;
    //...unless we're on the add page, in which case this is a new contact. in that case, return null.
    if (id === 'add') {
      return null
    //otherwise, find this contact in the contacts array and return that.
    } else {
      return props.contacts.find((contact) => {
        return contact.id.toString() === id;
      });
    }
  }

  onInputChange(input) {
    //input has both className and value. use className to determine which input has changed.
    this.setState({[input.className]: input.value})
  }

  validateName() {
    //name must not be blank. setting max length to 75 characters. Prefer to allow nonstandard names (like Q.Dogs) rather than risk a user not being able to enter their actual name. See: http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/

  }

  validateEmail() {
    //email address must not be null. this guy has thought of all of the edge cases - https://hackernoon.com/the-100-correct-way-to-validate-email-addresses-7c4818f24643 https://hackernoon.com/how-to-reduce-incorrect-email-addresses-df3b70cb15a9 .
    //For the sake of learning, let's assume that my contacts will have email addresses that
      //1. are 75 characters max
      //2. contain one @ at neither the first nor last position
  }

  validateImageUrl(){

  }

  validatePhoneNumber (){

  }

  validateAllInput() {
    //runs validator functions for each input area.
    //if all inputs are valid, runs either add or update function as appropriate
    console.log(this.props)
    console.log(this.state)


    //set values to pass up to App state
    //call appropriate function from this.props
  }

  render() {

    //How freakin' cool is ES6 syntax!?? This grabs all of state's contact-related properties to pass up to App state, while leaving contactIsNew, which only belongs here in contact view.
    let {contactIsNew, ...contact} = this.state;

    //Show update or add button as appropriate
    let submitButton = null;

    if (this.state.contactIsNew){
      submitButton = <button className="btn btn-primary btn-lg m-1" onClick={() => this.props.addContact(contact) }>Add</button>

    } else {
      submitButton = <button className="btn btn-primary btn-lg m-1" onClick={() => this.validateAllInput()}>Update</button>

    }


    return (<div><div>
      <div className="row">
        <div className="col-md-1 offset-md-1">
          <Link to="/">
            <button className="btn btn-outline-secondary m-3">Back</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 offset-md-1">

          <img className="img-fluid mw-100" src={this.state.imageUrl} alt={this.state.name}/>

        </div>
        {/* attach change handler to entire div to avoid repetition. */}
        <div className="col-md-4 m-2">
          <p>
            <strong>Name: </strong>
            <input className="name" value={this.state.name} onChange={(event) => this.onInputChange(event.target)}/>
          </p>
          <p>
            <strong>Email: </strong>
            <input className="email" value={this.state.email} onChange={(event) => this.onInputChange(event.target)}/>
          </p>
          <p>
            <strong>Phone number: </strong>
            <input className="phoneNumber" value={this.state.phoneNumber} onChange={(event) => this.onInputChange(event.target)}/>
          </p>
          <p>
            <strong>Image URL: </strong>
            <input className="imageUrl" value={this.state.imageUrl} onChange={(event) => this.onInputChange(event.target)}/>
          </p>
          <Link to="/">
            <button className="btn btn-default m-1">Cancel</button>
          </Link>
          <Link to="/">
            {submitButton}
          </Link>
          </div>

      </div>
    </div>
</div>
    )
  }

}

export default ContactView;

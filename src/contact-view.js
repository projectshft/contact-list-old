import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class ContactView extends Component {
  constructor(props) {
    super(props)

    //state should contain contact values and a boolean indicating whether this contact is already in the contacts array (update) or not (add)

    //if findContact returns null or undefined, contact was not in the contacts array and contact is new
    if (this.findContact(props)) {
      //create a new copy of the contact details so we don't mutate state
      let contactDetails = Object.assign({}, this.findContact(props));
      console.log(contactDetails === this.findContact(props))
      //each user-entered detail should have a value and a boolean indicating whether the value is valid
        for (let detail in contactDetails){
          if (detail !== 'id'){
            contactDetails[detail] = {value: contactDetails[detail], isValid: true}
          }
        }
        this.state = {...contactDetails, contactIsNew: false}
        console.log(this.state)
    } else {
      this.state = {
          id: this.generateId(props),
          name: {value: 'Q. Dogs', isValid: true},
          imageUrl: {
            value: 'https://i.pinimg.com/736x/97/27/a5/9727a533b8d35ec176155e92fd643477--pet-tattoos-wall-tattoo.jpg',
            isValid: true
          },
          email: {value: 'qdogs@example.com', isValid: true},
          phoneNumber: {value: '123-456-7890', isValid: true},
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
    //input's className tells us which input has changed. use that info to validate the input and update state acccordingly.
    let detailName = input.className;
    let inputDetails = {
      value: input.value,
      isValid: this.validate(detailName, input.value)
    }
    this.setState({[detailName]: inputDetails})
  }

  validate(detailName, value) {

    switch (detailName) {
      case 'name':
      // name must not be blank. setting max length to 75 characters. Prefer to allow nonstandard names (like Q.Dogs) rather than risk a user not being able to enter their actual name. See: http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/
        return value && value.length <= 75

      case 'imageUrl':
        break;
      case 'email':
      //this guy has thought of all of the edge cases - https://hackernoon.com/the-100-correct-way-to-validate-email-addresses-7c4818f24643 https://hackernoon.com/how-to-reduce-incorrect-email-addresses-df3b70cb15a9 .
      //For the sake of learning, let's assume that my contacts will have email addresses that
        //1. are not null (email is required)
        //2. are 100 characters max
        //3. match the sample email validation regex provided by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#Validation
        const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

        return value && value.length <= 100 && emailRegex.test(value);

      case 'phoneNumber':
      //Phone number is not required, but if provided, it should take the form of xxx-xxx-xxxx. If I were dealing with non-US numbers, I would expand this to include country code, different formats, etc. This won't catch invalid US numbers (like 111-111-1111), but the format will be correct.
        const phoneNumberRegEx = RegExp(/^([0-9]{3}-[0-9]{3}-[0-9]{4})$/);
        return value === null || phoneNumberRegEx.test(value);

      default:
        break;
    }


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
    //remove "isValid" properties before passing values to App state.
    for (let detail in contact) {
      if (typeof contact[detail] === 'object') {
        contact[detail] = contact[detail].value;
      }
    }
    console.log(contact)
    //Show update or add button as appropriate
    //Button should be disabled if input is not valid.
    let submitButton = null;

    if (this.state.contactIsNew){
      submitButton = <button className="btn btn-primary btn-lg m-1" onClick={() => this.props.addContact(contact) }>Add</button>

    } else {
      submitButton = <button className="btn btn-primary btn-lg m-1" onClick={() => this.props.updateContact(contact)}>Update</button>

    }


    return (
      <div className="container">
        <div className="row m-2">
          <div className="col-md-1">
            <Link to="/">
              <button className="btn btn-outline-secondary">Back</button>
            </Link>
          </div>
          <div className="col-md-1">
            <img className="img w-100" src={this.state.imageUrl.value} alt={this.state.name.value}/>
          </div>
        </div>

          <p>
            <strong>Name:</strong> {/* error message goes here */}
            <input className="name" value={this.state.name.value} onChange={(event) => this.onInputChange(event.target)}/>
          </p>

          <p>
            <strong>Email: </strong>
            <input className="email" type="email" value={this.state.email.value} onChange={(event) => this.onInputChange(event.target)}/>
          </p>

          <p>
            <strong>Phone number: </strong>
            <input className="phoneNumber" value={this.state.phoneNumber.value} onChange={(event) => this.onInputChange(event.target)}/>
          </p>

          <p>
            <strong>Image URL: </strong>
            <input className="imageUrl" value={this.state.imageUrl.value} onChange={(event) => this.onInputChange(event.target)}/>
          </p>

          <Link to="/">
            <button className="btn btn-default m-1">Cancel</button>
          </Link>
          <Link to="/">
            {submitButton}
          </Link>
      </div>
    )
  }

}

export default ContactView;

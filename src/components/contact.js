import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash'
import {forceUpdate, sendEvent} from '../state'

//selects contact and gets its unique identifier
const Contact = (props) => {
  const contactId = parseInt(props.search.match.params.id, 10)
  let contact = _.find(props.stateHandler.state.contacts, {id: contactId})

  //sets the state values forcing a render
const handleSubmitClick = () => {
  const nameVal =  this._name.value;
  const numberVal = this._number.value;
  const urlVal = this._url.value;
  const emailVal = this._email.value;
  debugger;
  if(nameVal !== ""){
  sendEvent('nameChange', nameVal, contactId)
  }
  if(emailVal !== ''){
  sendEvent('emailChange', emailVal, contactId)
  }
  if(numberVal !== ''){
  sendEvent('numChange', numberVal, contactId)
  }
  if(urlVal !== ''){
  sendEvent('urlChange', urlVal, contactId)
  }
}

  const differentHandle = () =>{

    let tempObj = {
    name: this._name.value,
    phone_number: this._number.value,
    image_url: this._url.value,
    email: this._email.value
  }
  sendEvent('newContact', tempObj, contactId);

  }




  if(!contact) {
    return ( <div>
          <h1>{props.name} </h1>
          <h2> (#{props.number})</h2>
          <h2>Email: {props.email}</h2>
          <img src={props.image_url}/>
          <input type="text" ref={input =>  this._name = input} placeholder='Edit Name Here' />
          <input type="text" ref={input =>  this._number = input} placeholder='Edit Number Here' />
          <input type="text" ref={input =>  this._url = input} placeholder='Edit URL here' />
          <input type="text" ref={input =>  this._email = input} placeholder='Edit Email Here' />
          <button onClick={differentHandle}>Submit</button>
          <Link to='/'>Back</Link>
        </div>
      )
    }



      return (
          <div>
            <h1> {contact.name} </h1>
             <h1>(#{contact.phone_number})</h1>
            <h2>Email: {contact.email}</h2>
            <img src={contact.image_url}/>
            <input type="text" ref={input =>  this._name = input} placeholder='Edit Name Here' />
            <input type="text" ref={input =>  this._number = input} placeholder='Edit Number Here' />
            <input type="text" ref={input =>  this._url = input} placeholder='Edit URL here' />
            <input type="text" ref={input =>  this._email = input} placeholder='Edit Email Here' />
            <button onClick={handleSubmitClick}>Submit</button>
            <Link to='/'>Back</Link>
          </div>

    )
}

Contact.defaultProps = {
  name: "Enter Name Below",
  number: "Enter Phone Number Below",
  email: "Enter Email Below",
  image_url: ""

}

export default Contact

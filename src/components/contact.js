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
  sendEvent('nameChange', nameVal, contactId)
  sendEvent('emailChange', emailVal, contactId)
  sendEvent('numChange', numberVal, contactId)
  sendEvent('urlChange', urlVal, contactId)

}

  if(!contact) {
    return ( <div>
      <h1> Test </h1>
          <h1>{props.name} (#{props.number})</h1>
          <h2>Email: {props.email}</h2>
          <img src={props.image_url}/>
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
  name: "Enter Name",
  number: 11111111,
  email: "Test@gmail.com",
  image_url: "http://via.placeholder.com/350x150"

}

export default Contact

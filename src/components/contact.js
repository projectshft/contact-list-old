import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash'
import {forceUpdate, sendEvent} from '../state'
import { CSSTransitionGroup } from 'react-transition-group'

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

  const createContact = () =>{

    let tempContact = {
    name: this._name.value,
    phone_number: this._number.value,
    email: this._email.value
  }

  if(this._url.value === "") {
    tempContact.image_url = 'https://i0.wp.com/www.calvary.edu/wp-content/uploads/2016/08/person-placeholder.jpg'
  }
  else {
    tempContact.image_url = this._url.value;
  }
  if (tempContact.name !==''){
  sendEvent('newContact', tempContact, contactId);
    this._name.value = ""
    this._number.value = ''
    this._url.value = ''
    this._email.value = ''
}

else{
  alert('A name is needed');
}

  }





  if(!contact) {
    return (

      <CSSTransitionGroup
    transitionName="test"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
      <div className="container text-center border card card-body bg-light">
          <h1>{props.name}</h1>
          <h2>{props.number}</h2>
          <h2>{props.email}</h2>
          <img src={props.image_url}/>
          <div className='row'>
            <div className ="col pt-2">
          <input type="text" ref={input =>  this._name = input} placeholder='Edit Name Here' />
              </div>
            </div>
            <div className='row'>
              <div className ="col pt-2">
          <input type="text" ref={input =>  this._number = input} placeholder='Edit Number Here' />
              </div>
            </div>
            <div className='row'>
              <div className ="col pt-2">
          <input type="text" ref={input =>  this._url = input} placeholder='Edit URL here' />
              </div>
            </div>
            <div className='row'>
              <div className ="col pt-2">
          <input type="text" ref={input =>  this._email = input} placeholder='Edit Email Here' />
              </div>
            </div>
            <div className='row'>
              <div className='col pt-2'>
          <button className="btn btn-primary" onClick={createContact}>Submit</button>
              </div>
            </div>
          <Link to='/'><h4>Back</h4></Link>
        </div>

        </CSSTransitionGroup>
      )
    }



      return (

      <CSSTransitionGroup
      transitionName="test"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
          <div className="container text-center border card card-body bg-light">
            <h1> {contact.name} </h1>
             <h1>#{contact.phone_number}</h1>
            <h2>Email: {contact.email}</h2>
            <img src={contact.image_url}/>
            <div className='row'>
              <div className ="col pt-2">
            <input type="text" ref={input =>  this._name = input} placeholder='Edit Name Here' />
                </div>
              </div>
              <div className='row'>
                <div className ="col pt-2">
            <input type="text" ref={input =>  this._number = input} placeholder='Edit Number Here' />
                </div>
              </div>
              <div className='row'>
                <div className ="col pt-2">
            <input type="text" ref={input =>  this._url = input} placeholder='Edit URL here' />
                </div>
              </div>
              <div className='row'>
                <div className ="col pt-2">
            <input type="text" ref={input =>  this._email = input} placeholder='Edit Email Here' />
                </div>
              </div>
              <div className="row">
                <div className="col pt-2">
            <button className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
                </div>
              </div>
            <Link to='/'><h4>Back</h4></Link>
          </div>
      </CSSTransitionGroup>
    )
}

Contact.defaultProps = {
  name: "Enter Name Below",
  number: "Enter Phone Number Below",
  email: "Enter Email Below",
  image_url: "https://i0.wp.com/www.calvary.edu/wp-content/uploads/2016/08/person-placeholder.jpg"

}

export default Contact

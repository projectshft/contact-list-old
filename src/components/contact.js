import React from 'react';
// import App from 'app';
//import data from '../data/data'

const Contact = ({props, contacts}) => {
  const contact = contacts.find(contact => contact.Id == parseInt(props.match.params.id)
  )

  const back = () => {
    props.history.push('/')
  }


  return(
    <div className='container'>
      <div className='row'>
        <h1>{contact.Name}</h1>
      </div>
      <div className='row'>
        <div className='col-md-2'>Phone Number:</div>
        <div className='col-md-6'>{contact.PhoneNumber}</div>
      </div>
      <div className='row'>
        <div className='col-md-2'>Email:</div>
        <div className='col-md-6'>{contact.Email}</div>
      </div>
      <div className='row'>
        <img className='col-md-3' src={contact.Image_URL} alt={contact.Name}/>
      </div>

      <button onClick={back}>Back</button>
    </div>
  )
}

export default Contact

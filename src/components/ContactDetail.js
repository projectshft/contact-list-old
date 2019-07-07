import '../ContactDetail.css'
import { Link } from 'react-router-dom';
import React from 'react';
import _ from 'lodash';


const ContactDetail = ({props, contacts}) => {
  const contact = _.find(contacts, {id: parseInt(props.match.params.id, 10) });
  if (!contact){
    return <div>The contact was not found <Link to='/contacts'>Back</Link> </div>
    }
    return(
      <div className='container'>
      <div className='row'>
      <div className='col-md-3'></div>
      <div className='col-md-6'>
      <div className='card text-center'>
        <img className='img-circle' src={contact.image_url}/>

        <div className='card-body'>
          <h4 className='card-title'>{contact.name}</h4>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{contact.email}</li>
          <li className='list-group-item'>{contact.phone_number}</li>
        </ul>
        <Link to='/contacts'>Back</Link>
        </div>
        </div>
        <div className='col-md-3'></div>
      </div>
</div>
    )
}





export default ContactDetail

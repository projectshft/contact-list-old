import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = (props) => {


      console.log(props.contact.id)
      return (
        <li>
          <span>{props.contact.name} - {props.contact.phone}  </span>
        </li>

      )
    }



export default ContactInfo;

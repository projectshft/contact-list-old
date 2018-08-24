import React from 'react';


const Contact = (props) => {

//test with console log to be sure click function is being invoked
//onClick, pass props to callback function
  const handleDeleteButtonClick = ({key}) =>{
    console.log('delete button was clicked!');
    console.log(props)
    props.deleteContact(key)
  }

  const handleEditButtonClick = ({key}) =>{
    props.updateContact(key);
    console.log(props);
  }

/*
  return:
  ** jsx format for contact detail with name, image, email
  ** onClick function invocation
*/

  return (
    <div>
      <li>
        <span>
          {props.contact.name} -
          <img src="{props.contact.image}"/>  -

          <button type="button" aria-label="Close" onClick={handleDeleteButtonClick}>
          <span aria-hidden="true">&times; delete </span>
          </button> -

          <button type="button" aria-label="Close" onClick={handleEditButtonClick}>
          <span aria-hidden="true">edit</span>
          </button>

        </span>
        <p>{props.contact.phone}</p>
        <p>{props.contact.email}</p>
      </li>
    </div>
  )
}

export default Contact

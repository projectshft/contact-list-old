import { Link } from 'react-router-dom'
import React from 'react'

class Contact_Form extends React.Component {
  constructor(){
    super()

    this.state = {
      id:0,
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }

    this.handleSubmitContact = this.handleSubmitContact.bind(this)
  }

}

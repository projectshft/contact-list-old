import React from 'react';

class SubmitContact extends Component{
  constructor(){
    super()
    this.state= {
      id: Math.round(Math.random()*100000000),
      name: "",
      image_url: "",
      phoneNumber: "",
      email: ""
    }
}

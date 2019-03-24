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

handleSubmit = (e)=>{
  e.preventDefault();

  const {newContact, contactDetails} = this.props;
  console.log("Contact Submitted");

  const newContactItem = {
    id: this.state.id,
    name: this.state.name,
    image_url: this.state.image,
    phoneNumber: this.state.phoneNumber,
    email: this.state.email
  };
  console.log(newContactItem);
  newContact(newContactItem);
  contactDetails.push('/')
};

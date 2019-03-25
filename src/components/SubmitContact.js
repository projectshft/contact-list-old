import React from 'react';

class SubmitContact extends React.Component{
  constructor(){
    super()
    this.state= {
      id: Math.round(Math.random()*100000000),
      name: "",
      image_url: "",
      phoneNumber: "",
      email: ""
    }
    this.handleSubmit= this.handleSubmit.bind(this);
}

handleSubmit = (e)=>{
  e.preventDefault();

  const {newContact, history} = this.props;
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
  history.push('/')
};

handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
      }
  render() {
      return (
          <div>
              <form onSubmit={e => this.handleSubmit(e)}>
                  <label>Name:
                      <input type='text' placeholder="Full Name" name="name" onChange={e => this.handleChange(e)} />
                  </label>

                  <br />

                  <label>Phone Number:
                      <input type="text" placeholder="(123)123-1234" name="phoneNumber" onChange={e => this.handleChange(e)} />
                  </label>

                  <br />

                  <label>Email:
                      <input type="text" placeholder="Email Address" name="email" onChange={e => this.handleChange(e)} />
                  </label>

                  <br />

                  <label>Image URL:
                      <input type="text" name="image_url" onChange={e => this.handleChange(e)} />
                  </label>

                  <br />
                  <button type="submit">Submit</button>
              </form>




          </div>
      )
  }
}
export default SubmitContact;

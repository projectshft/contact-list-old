
import React from 'react';


class NewContact extends React.Component {
    constructor() {
        super()

        let RandomNumberGenerator = Math.round(Math.random() * 100000000);

        this.state = {
            id: RandomNumberGenerator,
            name: '',
            image_url: '',
            email: '',
            phone_number: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { addContact, history } = this.props;

        const newContact = {
            id: this.state.id,
            name: this.state.name,
            image_url: this.state.image,
            email: this.state.email,
            phone_number: this.state.phone_number
        };

        if (newContact.name === '') {
          window.alert('我们用你的名字. Please Enter Your Name.');
        } else if (newContact.email === '') {
          window.alert('이베일주소를 적어주세요. Please Enter Your Email.');
        } else if (newContact.phone_number === '') {
          window.alert('Please Enter Your número de teléfono');
        } else {
        history.push('/')
        addContact(newContact)
    }};

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
              <form onSubmit={e => this.handleSubmit(e)}>
                  <label>Name:
                      <input type='text' placeholder="First Name & Last Name" name="name" onChange={e => this.handleChange(e)} />
                  </label> <br/>
                  <label>Phone Number:
                      <input type="text" placeholder="(123) 456-7890" name="phone_number" onChange={e => this.handleChange(e)} />
                  </label> <br/>
                  <label>Email:
                      <input type="text" placeholder="hello@gmail.com" name="email" onChange={e => this.handleChange(e)} />
                  </label> <br/>
                  <label>Image:
                      <input type="text" name="image_url" onChange={e => this.handleChange(e)} />
                  </label> <br/>
                  <button type="submit">Submit</button>
              </form>
            </div>
        )
    }
}



export default NewContact;

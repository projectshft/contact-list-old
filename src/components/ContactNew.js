import { Link } from 'react-router-dom';
import React from 'react';

class ContactNew extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      name: '',
      telephone: '',
      email: '',
      imgSrc: '',
    };

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
  }

  handleSubmitContactClick() {
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      telephone: this.state.telephone,
      email: this.state.email,
      imgSrc: this.state.imgSrc,
    };

    this.props.addContact(newContact);
    this.props.history.push('/contacts');
  }

  render() {
    return (
      <div>
        <form>
          <label>Contact Id</label>
          {/* TOTAL UNKNOWN HERE */}
          <input
            type='number'
            className='form-control'
            onChange={(event) =>
              this.setState({ id: parseInt(event.target.value, 10) })
            }
          />

          <label>Name</label>
          <input
            type='text'
            className='form-control'
            onChange={(event) => this.setState({ name: event.target.value })}
          />

          <br />

          <label>Telephone</label>
          <input
            type='text'
            className='form-control'
            onChange={(event) =>
              this.setState({ telephone: event.target.value })
            }
          />

          <br />

          <label>Email</label>
          <input
            type='text'
            className='form-control'
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <br />

          <label>Image</label>
          <input
            // type??
            type='text'
            className='form-control'
            onChange={(event) => this.setState({ imgSrc: event.target.value })}
          />

          <button type='button' onClick={this.handleSubmitContactClick}>
            Submit
          </button>
        </form>

        <Link to='/contacts'>Contacts</Link>
      </div>
    );
  }
}

export default ContactNew;

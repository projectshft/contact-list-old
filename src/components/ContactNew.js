import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ContactNew extends Component {
  constructor () {
    super();

    this.state = {
      id: '',
      name: '',
      email: '',
      telephone: '',
      imgSrc: '',
    };

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
  }

  handleSubmitContactClick () {
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      telephone: this.state.telephone,
      imgSrc: this.state.imgSrc,      
    };

    this.props.addContact(newContact);
    this.props.history.push('/contacts');
  }


  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-1'>
            <div className='row back-clicker'>
            </div>
          <Link to='/contacts'>Back</Link>
          </div>
          <h5 className='new-contact-details'>New Contact Details</h5>
          <br />
        </div>
        <form className='add-contact-form'>
          <div class="form-group row">
            <label for="inputName" class="col-sm-2 col-form-label">Name</label>
             <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Name"
                  onChange={(event) => this.setState({ name: event.target.value })}/>
             </div>
          </div>
            
         <div class="form-group row">
            <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
             <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    onChange={(event) => this.setState({ email: event.target.value })}/>
              </div>
          </div>

        <div class="form-group row">
            <label for="inputTelephone" class="col-sm-2 col-form-label">Phone</label>
             <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                id="inputTelephone"
                placeholder="Telephone number"
                onChange={(event) => this.setState({ telephone: event.target.value })}/>
             </div>
         </div>
                
        <div class="form-group row">
            <label for="inputImage" class="col-sm-2 col-form-label">Image</label>
             <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputImage"
                    placeholder="Link to an image (https://...)"
                    onChange={(event) => this.setState({ imgSrc: event.target.value })}/>
             </div>
        </div>
                  
        <div class="form-group row">
            <label for="inputId" class="col-sm-2 col-form-label">Id</label>
             <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputId"
                    value=''
                    onChange={(event) => this.setState({ id: event.target.value })}/>
             </div>
          </div>          
        </form>
        <br />  
        <div className='row'>
        <button OnClick="GetRandom()" type="button">Generate Id</button>
        <script> function GetRandom() (         
        let newId = document.getElementById("inputId");
        newId.value = Math.round(Math.random() * 10000);
        );
        </script>
        </div>
        <br />
        <br/>
        <div className='row'>
          <button type='button' onClick={this.handleSubmitContactClick}>Submit</button>
        </div>
        <br/>

      </div>
    );
  }
}

export default ContactNew;

import React, {Component} from 'react';

class EditContact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      Name: '',
      PhoneNumber: '',
      Email: '',
      Image_URL: ''
    }
  }

    handleEdit = () => {
      this.props.editContact(this.state)
      this.props.history.push('/')
  }

  render(){
   return (
     <div className='container'>
       <div className='row'>
         <h1>Edit Contact</h1>
       </div>
       <div className='row'>
         <div className='col-md-2'>Name:</div>
         <div className='col-md-6'>
           <input
             className='input'
             type='text'
             placeholder='Name'
             onChange={ event => this.setState({ Name: event.target.value })}
             />
         </div>
       </div>
       <div className='row'>
         <div className='col-md-2'>Phone Number:</div>
         <div className='col-md-6'>
             <input
               className='input'
               type='text'
               placeholder='1234567891'
               onChange={ event => this.setState({ PhoneNumber: event.target.value })}
           />
         </div>
       </div>
       <div className='row'>
         <div className='col-md-2'>Email:</div>
         <div className='col-md-6'>
           <input
              className='input'
              type='text'
              placeholder='Email'
              onChange={ event => this.setState({ Email: event.target.value })}
            />
         </div>
       </div>
       <div className='row'>
         <div className='col-md-2'>Image Url:</div>
         <div className='col-md-6'>
             <input
                className='input'
                type='text'
                placeholder='Image URL'
                onChange={ event => this.setState({ Image_URL: event.target.value })}
              />
          </div>
       </div>

       <button onClick={this.handleEdit}>Submit</button>
     </div>
   )
  }

}

export default EditContact

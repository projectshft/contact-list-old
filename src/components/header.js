import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { handleSignInClick,handleClientLoad} from '../googleApi'

class Header extends Component {
  constructor(){
    super();
    
    // to initiate google api.
    handleClientLoad();
  }
  render() {
    return(
      <div className='row justify-content-center app-header'>
        <div className='col-3 justify-content-center'>
              <Link to='/' className='nav justify-content-center'>Contacts List</Link>
        </div>
        <div className='col-3 justify-content-center'>
              <Link to='/AddContact' className='nav justify-content-center'>Add New Contact</Link>
        </div>
        <div className='col-3 justify-content-center'>
              <div className='login-to-google' onClick={handleSignInClick}>Import from Google</div>
        </div>
      </div>
    )
  }
}

export default Header

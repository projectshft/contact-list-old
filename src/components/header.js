import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  // constructer(){
  //   super()
  // }

  render() {
  return (
    <div className='container-fluid App-header'>
      <div className='row justify-content-center align-center '>
        <div className='col-md-offset-3 col-md-4 justify-content-center'>
          <Link to='/addContact'>add contact</Link>
        </div>
        <div className='col-md-4 justify-content-center'>
          <Link to='/'>Home</Link>
        </div>
      </div>
    </div>



  )
 }
}
export default Header

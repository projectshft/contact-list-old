import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  constructor(props){
    super()
    console.log(props)

  }
  render() {
    return (
      <div>
        <div className='home-title'>
          <h1>All Contacts</h1>
        </div>
      <div>
        {
          this.props.allContacts.map((contact) => (
            <div key={contact.Id}>
              <Link to='/contact'>{contact.Name}</Link>
            </div>
          ))
        }
      </div>
    </div>
    );
  }





}

export default Home;

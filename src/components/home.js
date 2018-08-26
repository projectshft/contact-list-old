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
      <div className='container'>
        {
          this.props.allContacts.map((contact) => (
            <div className='row col-md-3' key={contact.Id}>
              <Link to={`/contact/${contact.Id}`}>{contact.Name}</Link>
                <div>
                  <Link to={`/editContact/${contact.id}`}>edit</Link>
                </div>
            </div>
          ))
        }
      </div>
    </div>
    );
  }





}

export default Home;

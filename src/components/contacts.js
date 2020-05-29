import React, { Component } from 'react';//this will not be a static page

class Contacts extends Component {

    render() {
      return (
        <div className="contacts">
          <ul>
            <li>Christina <a href='#'>edit</a> <a href='#'>delete</a></li>
            <li>Brian <a href='#'>edit</a> <a href='#'>delete</a></li>
            <li>Marisa <a href='#'>edit</a> <a href='#'>delete</a></li>
          </ul>
        </div>

      )
    }


}
export default Contacts;

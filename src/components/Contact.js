import React, { Component } from 'react'

//each individual contact
class Contact extends Component {
  render() {
    return (
      <div>
        <h4>Taylor Swift</h4>
        <ul>
          <li>id: 1</li>
          <li>phone: 000-000-0000</li>
          <li>email: tswift@gmail.com</li>
          <li>
            <img className="img-responsive" src='https://pixel.nymag.com/imgs/daily/vulture/2018/07/06/06-taylor-swift-1.w330.h330.jpg' />
            </li>

        </ul>
      </div>
    )
  }
}

export default Contact;

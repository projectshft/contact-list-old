import { Switch, Route } from 'react-router-dom'
import React from 'react';
import ContactList from './ContactList';
import Header from './Header';
import NewContact from './NewContact'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const generateId = () => Math.round(Math.random() * 100000000)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: generateId(),
          name: 'Barry Obama',
          email: 'b-bama@gmail.com',
          phone: '222-222-2222',
          imgUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg' 
        },
        {
          id: generateId(),
          name: 'RBG',
          email: 'rbg@gmail.com',
          phone: '444-444-4444',
          imgUrl: 'https://www.lawcrossing.com/images/articleimages/Notorious-RBG-Big.jpg' 
        },
        {
          id: generateId(),
          name: 'Taylor Swift',
          email: 'tswift@gmail.com',
          phone: '000-000-0000',
          imgUrl: 'https://pixel.nymag.com/imgs/daily/vulture/2018/07/06/06-taylor-swift-1.w330.h330.jpg' 
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <ul class="row">
          <ContactList contacts={this.state.contacts}/>
          </ul>
        {/* create a switch for contacts, indvidual contact & create new contact */}
        


        <NewContact />

        </div>
      </div>
    );
  }
}

export default App;

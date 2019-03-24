import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './components/contacts.js';
import New from './components/new.js';
import Id from './components/id.js';
import Main from './index.js';
//import React, { Component } from 'react';
//import './App.css';

class App extends React.Component {

  constructor () {
    super()

    this.state = 
      {
        id: 1,
        name: 'Alice'
      }

      //How to pass this.state.name to {Contacts} & {Id}?? bind.this?

  };

  
 

  render() {
    return (
      <div className="row">
        <div className="page-header">
          <h1>i.ROLO</h1>
        </div>

        <Main />
     
      </div>
         
    );
  }


  // render() {
  //   return (
  //     <div className="row">

  //         <div className="page-header">
  //           <h1>i.ROLO</h1>
  //         </div>

  //         <div>
  //           <Contacts name={this.state.name} />
  //         </div>  

  //         <div>
  //           <New />
  //         </div>

  //         <div>
  //           <Id name={this.state.name} />
  //         </div>
     
  //     </div>
         
  //   );
  // }

}

export default App;

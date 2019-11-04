import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Newcontact from './Newcontact'
import Contactname from './Contactname'
import ContactDetails from './Contactdetails'
import Listofcontacts from './Listofcontacts'
import Listofcontactsexpanded from './Listofcontactsexpanded'



//import logo from './logo.svg';
//import './App.css';

// Contact list eval skeleton!!

//Contacts component is the Main.  it will include
  // 1.) add contact button
  // 2.) "Contacts" Header
  // 3.) Name sub-Component
          // a) edit + delete buttons
          // b) Contact Info sub-Component
                  // clicking the Contact Info will be the same as edit?

//start with contacts component and build from there

//test 2

//updating contact list


class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            fullname: '',
            phonenumber: '',
  
        };
  
        this.state = this.initialState;
    }
  
    handleChange = event => {
        const { name, value } = event.target;
  
        this.setState({
            [name] : value
        });
    }
  
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };
  
    // render() {
    //     const { name, number } = this.state; 
  
    //     return (
    //         <form onSubmit={this.onFormSubmit}>
    //             <label>Contact Name</label>
    //             <input 
    //                 type="text" 
    //                 name="name" 
    //                 value={name} 
    //                 onChange={this.handleChange} />
    //                 <br></br>
    //             <label>Phone Number</label>
    //             <input 
    //                 type="text" 
    //                 name="number" 
    //                 value={number} 
    //                 onChange={this.handleChange} />
    //                 <br></br>
    //             <button type="submit">
    //                 Submit
    //             </button>
    //         </form>
    //     );
    // }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/newcontact' render={() => (
            <Newcontact addcontact={this.addContact} contacts={this.state.contacts} />
          )}/>
          <Route path='/contactdetails' component={ContactDetails}/>
          <Route path='/contactname' component={Contactname}/>
          <Route path='/listofcontacts' component={Listofcontacts}/>
        </Switch>
      </div>
    )};

          };
  
export default App;
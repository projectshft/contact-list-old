
import React from 'react';
import ReactDOM from 'react-dom';


class New extends React.Component{
  
    constructor(props) {
      super(props)
  
      this.state = {
        newContact: "",
        contacts: []
      };
    }
    render() {
        
    
    
        return (
          <div>
            <h1>New Contact info</h1>
          </div>

          // updateInput(key, value) {
          //   // update react state
          //   this.setState({ [key]: value });
          // }
        
          // //takes input
          // addContact() {
          //   // create a new contact with unique id 
          //   const newContact = {
          //     id: 1 + Math.random(),
          //     value: this.state.newContact.slice()
         
          //   };
        
          //   // copy current contacts of items
          //   const contacts = [...this.state.contacts];
        
          //   // add the new item to the contacts
          //   contacts.push(newContact);
        
          //   // update state with new contacts, reset the new item input
          //   this.setState({
          //     contacts,
          //     newContact: ""
          //   });
          // }
        );
      }
    }


    export default New;

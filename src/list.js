
import React from 'react';
import ReactDOM from 'react-dom';




class List extends React.Component{
  
    constructor(props) {
      super(props)
  
      this.state = {
        contacts: []
      };
    }
    render() {
        
    return (
          <div>
            <h1>Contact List</h1>
          </div>

    )}
};

    export default List;

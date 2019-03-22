import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  render () {
    return (<h1>Contact List</h1>);
  }
}

export default Contacts;
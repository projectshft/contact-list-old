import { Switch, Route } from 'react-router-dom'
import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    const contact = parseInt(this.props.match.params.number,10)
    this.state = contact
  }

}
export default Edit

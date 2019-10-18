import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>Contact List</h1>
            <hr/>
          </div>
          <button type="button" className="btn btn-primary">New Contact</button>

          <hr/>
        <div className="contacts-list">
          <h1>Contact</h1>
        </div>
        </div>
      </div>
    </div>);
  }
}


export default App;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import New from "./new";
import List from "./list";
import Contact from "./contact";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newContact: "",
      contacts: []
    };
  }

  render() {
    return (
      <h1>Contacts</h1>

      //   <button>Add Contact</button>
    );
  }
}

export default App;

// <BrowserRouter>
//     <Switch>
//         <Route exact path="/contact" component={Contact} />
//         <Route path="/contact/new" render={(props) => {
//             <New contact={this.state.contact} />
//         }} />
//         <Route path="/contact/:id" component={Contact} />
//     </Switch>
// </BrowserRouter></BrowserRouter>

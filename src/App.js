import React, { Component } from "react";
import ReactDOM from "react-dom";
import New from "./new";
import List from "./list";
import Contact from "./contact";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//generate a new random id # per contact
const generateId = () => Math.round(Math.random() * 100000000);

class App extends React.Component {
  constructor(props) {
    super(props);

    //set default state to empty array of contacts then push new contact
    this.state = {
      contacts: ["bob", "mary", "jim"]
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Contacts</h1>
          <div>{this.state.contacts}</div>

          <button>Add Contact</button>
          <Switch>
            <Route exact path="/contact" component={New} />
            <Route
              path="/contact/new"
              render={props => {
                <New contact={this.state.contact} />;
              }}
            />
            <Route path="/contact/:id" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//why is it all rendering on same page when I have the switch statement?

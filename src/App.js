import React, { Component } from "react";
import ReactDOM from "react-dom";
import New from "./new";
import Home from "./home";
import Contact from "./contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/newcontact" component={New} />
            <Route exact path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

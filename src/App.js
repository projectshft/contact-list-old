import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import ContactList from "./components/ContactList.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // initialize our basic state with contacts
    this.state = {
      contacts: [
        {
          id: 70219577,
          first_name: "Albert",
          last_name: "Einstein",
          image_url:
            "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          email: "aeinstein@example.com",
          phone_number: "15555555555",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ContactList} />
        </Switch>
      </div>
    );
  }
}

export default App;

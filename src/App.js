import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

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

class App extends Component {
  state = {
      characters: []
  };

  removeCharacter = index => {
      const { characters } = this.state;
  
      this.setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }

  handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]});
  }

  render() {
      const { characters } = this.state;
    
      return (
        <Switch>
        <Route exact path="contacts" 
            render={() => (<App
                clickHandler={this.handleSubmit} />)}
          />
      </Switch>
    );
  
  }
}
//layout update needed? for revision?
export default App;

import React from 'react';
import Main from './main';
import {Jumbotron} from 'react-bootstrap';



//Maybe App.js not needed now, here is where to place header and footer, navbar ect.. upon expansion of app.
const App = (props) => (
  <div>
    <Jumbotron className="text-center"> <h1> My Contacts </h1> </Jumbotron>
    <Main state={props.state}/>
  </div>
)

export default App;

import React from 'react';
import Main from './main';



//Maybe not needed now, here is where to place header and footer, navbar ect..
const App = (props) => (
  <div>
    <Main state={props.state}/>
  </div>
)

export default App;

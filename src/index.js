import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import New from './Components/new';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      
      <Switch>
        
        <Route exact path="/" component={App} />
      <Route path="/contacts/new" component={New} />
    <Route path="/contacts/id=" render={() =>component={showContact} } /> */} */} */}
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );
  

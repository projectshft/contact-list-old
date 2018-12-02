import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link,  Component } from 'react-router-dom';
import React from 'react';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

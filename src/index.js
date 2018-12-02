import { render } from 'react-dom';
import React, { BrowserRouter, Switch, Route, Link } from 'react'
import App from "./App";

render((
  <BrowserRouter>
  <App />
  </BrowserRouter>), document.getElementById("root"));

export default BrowserRouter;

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route, Link, IndexRoute } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom'
import HomePage from './components/HomePage'

const PrimaryLayout = props => (
  <div className="primary-layout container">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route exact path="/" render={()=> <HomePage />} />
      <Route path="/contacts" component={HomePage} />
    </main>
  </div>
)

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

// TODO: Add propTypes if needed
// App.propTypes = {

// };

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
// import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import NewContact from './components/New-Contact'
// import ContactList from './components/Contact-List'

//store state here

// const App = () => (
class App extends React.Component {

      render() {
          return (
        <div>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/new' component={NewContact}/>
            {/* <Route exact path='/:id' component={Contact-View}/> */}
            </Switch>
        </div>
      )
  }
}


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
    );


import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <Main />
    <Header />
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path='/contacts/new' component={CreateContact}
    </Switch>
  </main>
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

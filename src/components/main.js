import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsList from './contactsList';
import ContactView from './contactView';

const Main = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-9 offset-lg-3">
          <Switch>
            <Route exact path='/' component={ContactsList} />
            <Route path='/contacts/:id' component={ContactView} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default Main;

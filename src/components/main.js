import React, { Component } from 'react';//this will not be a static page
import { Switch, Route } from 'react-router-dom';
import AddContacts from './add-contact';
import Contacts from './contacts';
import ContactInfo from './contact-info';


class Main extends Component {

    render() {
      return (
        <main>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="page-header">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route path="/contacts/new" component={AddContacts} />
                  <Route path="/contact" component={ContactInfo} />
                </Switch>
              </div>
            </div>
          </div>
        </main>



      )
    }


}
export default Main;

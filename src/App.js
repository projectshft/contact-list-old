
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import New from '/compoments/new';
import List from '/components/list';
import Contact from '/components/contact';




class App extends React.Component{
  
    constructor(props) {
      super(props)
  
      this.state = {
        newContact: "",
        contacts: []
      };
    }
          
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/contacts" component={Contacts} />
                    <Route path="/contacts/new" render={(props) => {
                        <New contact={this.state.contacts} />
                    }} />
                    <Route path="/contacts/:id" component={Contact} /> 
                </Switch>
            </BrowserRouter>



        );
    }
}








export default App;

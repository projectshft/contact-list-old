
import React from 'react';
import ReactDOM from 'react-dom';




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



            // <div>
    
            // <h1 className="app-title">Contacts</h1>

            //     <button //on click, take user to new route with an adding contact form
            //     className="add-btn btn-floating"
            //     onClick={() =>()}
            //     disabled={!this.state.newContact.length}
            //     >
            //     <i class="material-icons"> Add Contact </i>
            //     </button>
            //     <br /> <br />
            //     <ul>
            //     {this.state.contacts.map(contact => {
            //         return (
            //         <li key={contact.id}>
            //             {contact.value}
            //             <button className="btn btn-floating" onClick={() => this.deleteContact(contact.id)}>
            //             <i class="material-icons">x</i>
            //             </button>
            //         </li>
            //         );
            //     })}
            //     </ul>
            // </div>
            // </div>
            // </div>
        );
    }
}








export default App;

import { Switch, Route } from "react-router-dom"
import React, {Component} from "react"
import Home from "./Home"
import Contact from "./Contact"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactPage from "./ContactPage"

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: [
        {name:'Albert Einstein', email:'albert.einstein@princeton.edu', phone: '609-788-3478', thumbnail: 'https://opimedia.azureedge.net/-/media/images/utr/editorial/articles/online-articles/2014/04-01/albert-einstein-the-humanitarian/albert-einstein-jpg.jpg', id: this.generateId()},
        {name:'Niels Bohr', email:'niels.bohr@gmail.com', phone: '576-390-6436' , thumbnail: 'https://i.pinimg.com/originals/d6/9b/b8/d69bb8007401eaf8efa8d11ec780d322.jpg', id: this.generateId()},
        {name: 'J.Robert Oppenheimer', email: 'JOppenheim@berkley.edu', phone: '867-539-7393', thumbnail: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MzM1MjEyMDQz/j-robert-oppenheimer-9429168-1-402.jpg', id: this.generateId()}
      ]
  }
}

generateId = () => {
  return Math.round(Math.random()*100000000)
}


addContact = (newContact) => {
  this.setState({
    contacts: [...this.state.contacts, newContact]
  });
}

render() {
  const {contacts} = this.state;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" render={props => (
          <ContactList contacts={contacts} {...props}/>
        )}/>
        <Route path="/contacts/:id" render={props => (
          <ContactPage contacts={contacts} {...props} />
        )} />
        <Route path="/AddContact" render={(props) => (
          <AddContact props={props} addContact={this.addContact}/>
        )} />
      </Switch>
    </div>
  )
}

}

export default App
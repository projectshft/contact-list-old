import { Switch, Route } from "react-router-dom"
import React from "react"
import Home from "./Home"
import AddContact from "./AddContact"

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {name:'Albert Einstein', email:'albert.einstein@princeton.edu', phone: '609-788-3478', thumbnail: 'https://opimedia.azureedge.net/-/media/images/utr/editorial/articles/online-articles/2014/04-01/albert-einstein-the-humanitarian/albert-einstein-jpg.jpg', id: this.generateId()},
        {name:'Niels Bohr', email:'niels.bohr@gmail.com', phone: '576-390-6436' , thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd6%2F9b%2Fb8%2Fd69bb8007401eaf8efa8d11ec780d322.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F533746993318087851%2F&docid=V8AqXvrBM7e16M&tbnid=EuditjKeBNlHFM%3A&vet=10ahUKEwiK9ou33fzeAhXlm-AKHf-YCrQQMwhxKAgwCA..i&w=600&h=871&bih=609&biw=1280&q=niels%20bohr&ved=0ahUKEwiK9ou33fzeAhXlm-AKHf-YCrQQMwhxKAgwCA&iact=mrc&uact=8', id: this.generateId()},
        {name: 'J.Robert Oppenheimer', email: 'JOppenheim@berkley.edu', phone: '', thumbnail: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MzM1MjEyMDQz/j-robert-oppenheimer-9429168-1-402.jpg', id: this.generateId()}
      ]
  }
}

generateId = () => {
  Math.round(Math.random()*100000000)
}


addContact = (newContact) => {
  this.setState({contacts: this.state.contacts.concat([newContact])});
}

render() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"component={Home} />
        <Route path="/new" component={AddContact} />
      </Switch>
    </div>
  )
}

}

export default App

import { Switch, Route } from 'react-router-dom'
import React from 'react'
import UserList from './UserList';



class App extends React.Component {
  constructor() {
    super()

    const generateId = () => Math.round(Math.random() * 100000000)
    
    //test data for the contact-list
      this.state = {
        users: [
        {id: generateId(), 
          name: "Albert Einstein",
          image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          email: "aeinstein@example.com",
          phone_number: "15555555555"
        },
        {id: generateId(),
          name: "Marcus Swain",
          image_url: "https://www.megamarc.com",
          email: "superduperswain@gmail.com",
          phone_number: "15555555557"
        }
        ]
    }
    this.addUser = this.addUser.bind(this);
  }

  addUser(user){
    this.setState({users: this.state.users.concat([user])});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={UserList}/>
          <Route path='/roster' render={() => (
            <UserList addUser={this.addUser} users={this.state.users} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App

    
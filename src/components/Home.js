import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from './ContactList';

const Home = () => {
    return (
        <div id="home-page">
            <h1>Contacts</h1>

            {/* direct to contact form on click */}
            <Link to="/contacts/new">
                <button className="add-button" type="text">Add Contact</button>
            </Link>

            <ContactList />
        </div>
    )
}

export default Home;

/*
const Roster = ({players, addPlayer}) => (
  <Switch>    
    <Route path='/roster/new' render={(routerProps) => (
      <PlayerNew history={routerProps.history} players={players} addPlayer={addPlayer} />
    )}/>
  
    <Route path='/roster/:number' render={(routerProps) => (
      <Player playerId={parseInt(routerProps.match.params.number, 10)} players={players} />
    )}/>
    
    <Route path='/roster' render={() => (
      <FullRoster players={players} />
    )}/>
  </Switch>
)

*/
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


class ContactsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.contacts.map(item => (
			<div key={item.id}>
				<span> {item.name}: {item.number} </span>
				<span> <Link to={`/contacts/edit/${item.id}`}>Edit</Link></span>
				<span> <Link to={`/contacts/delete/${item.id}`}>Delete</Link></span>
			</div>
        ))}
      </div>
    )
  }
}

class AddContactPage extends React.Component {
	constructor(props) {
		super(props);
    
        this.addNewContact = this.addNewContact.bind(this);
    	
	}

    addNewContact(event) {
		alert('pressed');
		event.preventDefault()
		const newContact = {
        		"name":"Jesse",
        		"number":"941-840-4641",
				"id":"2"
      		};

		this.setState.contacts = newContact;
	}

	onChange = (event) => {
		this.setState({term: event.target.value });
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		const newContact = {
        		"name":"Jesse",
        		"number":"941-840-4641",
				"id":"2"
      		};
		this.setState({
			term: '',
			contacts: [...this.props.contacts, newContact]
		});
	}


	render() {
		return (
			<div>
                <form className="contact-list" onSubmit={this.onSubmit}>
					<input value={this.props.term} onChange={this.onChange} />
					<button>Submit</button>
				</form>
				<button onClick={this.addNewContact}>
					New Contact
				</button>
				<Link to='/'>Home</Link>
				<span> </span>
				<Link to='/contacts'>Contacts</Link>
				<div>this is a new page</div>
			</div>
		)
	}
}

class EditContactPage extends React.Component {
    
	constructor(props) {
		super(props);
    }

	render() {
		return (
			<div>
				<Link to='/contacts'>Contacts</Link>
				<div>this is the edit page</div>
				<div>need to edit id:{this.props.id}</div>
			</div>
		)
	}
}
class DeleteContactPage extends React.Component {
	render() {
		return (
			<div>
				<Link to='/contacts'>Contacts</Link>
				<div>this is the delete page</div>
				<div>need to delete id:{this.props.id}</div>
			</div>
		)
	}
}

/* 
	ContactsRouter

	Handles /contacts routing
*/
class ContactsRouter extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/contacts' component={ContactsPage}/>
				<Route path='/contacts/new' component={AddContactPage}/>
				<Route path='/contacts/edit/:id' component={EditContactPage}/>
				<Route path='/contacts/delete/:id' component={DeleteContactPage}/>
			</Switch>
		)
	}
}

/*
	ContactsPage

	
*/
class ContactsPage extends React.Component {
	constructor(props) {
    	super(props);
        this.state = { 
      		contacts: [{
        		"name":"Tanya",
        		"number":"313-333-5258",
				"id":"1"
      		}],
			term: ''
		};
	}

    add(newcontact) {
        alert('add contact');
        this.setState({
            contacts: this.state.contacts.concat([newcontact])
        })
    }

    remove(id) {
        alert('remove contact');
    }

	render() {
    	return (
      		<div>
        		<h3>Contacts</h3>
				<Link to='/'>Home</Link>	
                <br />
				<Link to='/contacts/new'>New Contact</Link>	
        		<ContactsList contacts={this.state.contacts} />
      		</div>
    	)
  	}
}





class Home extends React.Component {
	render() {	
		return (
			<div>
				<h1>Welcome!</h1>
				<Link to="/contacts">Contacts</Link>
				<br />
				<Link to="/contacts/new">New Contact Page</Link>
			</div>
		)
	}
}



class Main extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/contacts' component={ContactsRouter}/>
				</Switch>		
			</main>
		)
	}
}


class App extends React.Component {
	render() {
		return (
			<div>
				<Main />
			</div>	
		)
	}
}

export default App;

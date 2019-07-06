import { Link } from 'react-router-dom'
import React, { Component } from 'react'

class NewContact extends Component {
    render() {
        return (
            <div className="row">
                <form>
                    <label className="col-md-2">Name</label>
                    <input type='text' className='form-control'onChange={event =>
                    this.setState({ name: event.target.value })
                    }/>
        
                    <br/>
        
                    <label>Image</label>
                    <input type='text' className='form-control'onChange={event =>
                    this.setState({ number: parseInt(event.target.value, 10) })
                    }/>
        
                    <br/>
        
                    <label>Email</label>
                    <input type='text' className='form-control'onChange={event =>
                    this.setState({ position: event.target.value })
                    }/>

                    <br/>

                    <label>Phone Number</label>
                    <input type='text' className='form-control'onChange={event =>
                    this.setState({ number: parseInt(event.target.value, 10) })
                    }/>
        
                    <br/>
        
                    <button type="button" onClick={this.handleSubmitPlayerClick}>Submit</button>
                </form>
        
                <Link to='/roster'>Roster</Link>
            </div>
        )
    }
    
}

export default NewContact
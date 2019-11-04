import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            fullname: '',
            phonenumber: '',

        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, number } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Contact Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                    <br></br>
                <label>Phone Number</label>
                <input 
                    type="text" 
                    name="number" 
                    value={number} 
                    onChange={this.handleChange} />
                    <br></br>
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//USE PROPTYPES
{/* ContactForm.propTypes = {
     key: PropTypes.string,
     name: PropTypes.string,
     email: PropTypes.string,
    phone_number: PropTypes.number
 } */}
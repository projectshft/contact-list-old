import React from 'react';
import PropTypes from 'prop-types';
import classnames from  'classnames';

//create a stateless functional component to make the form groups more DRY
const TextInputGroup = ({ //destructure props
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            name={name}
            //use classnames module to allow conditional classnames
            className={classnames('form-control form-control-md', {
                'is-invalid': error
            })}
            placeholder={placeholder}
            value={value}
            onChange = {onChange}
        />
        {/* if there is an error, display the error, add invalid-feedback cllas, and don't allow moving to the next input field */}
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
//PropTypes
TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

//default PropTypes
TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;
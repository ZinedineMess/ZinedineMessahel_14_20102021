import PropTypes from 'prop-types';
import React from 'react';

const Input = props => {
    return (
        <input
            className='formInput'
            id={props.inputName}
            type={props.inputType}
            name={props.inputName}
            value={props.newEmployee[props.inputName]}
            onChange={(e) => {
                props.setNewEmployee((state) => ({
                    ...state,
                    [e.target.id]: e.target.value,
                }));
            }}
        />
    );
};

Input.propTypes = {
    inputName : PropTypes.string.isRequired,
    inputType : PropTypes.string.isRequired,
    newEmployee : PropTypes.object.isRequired,
    setNewEmployee : PropTypes.func.isRequired,
};

export default Input;

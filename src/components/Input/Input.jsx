import PropTypes from 'prop-types';
import React from 'react';

/**
 * React Input component allowing the user to enter text in order to fill out the form.
 * The value of the input will be added to newEmployee based on its inputName
 * @param {string} inputName - 
 * @param {string} inputType - 
 * @param {object} newEmployee - 
 * @param {func} setNewEmployee - 
 * @return {void}
 */
const Input = props => {
    return (
        <input
            className='formInput'
            id={props.inputName}
            type={props.inputType}
            name={props.inputName}
            aria-labelledby={props.inputName}
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

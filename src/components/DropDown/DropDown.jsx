import PropTypes from 'prop-types';
import React from 'react';
import Select, { createFilter } from 'react-select';

/**
 * DropDown component allowing the user to select one of the options included in the data passed in props
 * @param {array} options  
 * @param {object} newEmployee  
 * @param {string} inputName  
 * @param {func} setNewEmployee  
 * @return {Select}
 */
const DropDown = props => {
    return (
        <Select
            aria-label={props.inputName}
            aria-haspopup="listbox"
            className='custom-select'
            options={props.options}
            value={{ label: props.newEmployee[props.inputName] }}
            filterOption={createFilter({ ignoreAccents: false })}
            classNamePrefix='custom-select'
            onChange={(e) => {
                props.setNewEmployee((state) => ({
                    ...state,
                    [props.inputName]: e.label
                }));
            }}
        />
    );
};

DropDown.propTypes = {
    options : PropTypes.array.isRequired,
    newEmployee : PropTypes.object.isRequired,
    inputName : PropTypes.string.isRequired,
    setNewEmployee : PropTypes.func.isRequired,
};

export default DropDown;

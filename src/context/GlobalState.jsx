import { ADD_EMPLOYEE } from 'utils/constants';
import { employeeReducer } from 'context/reducers';
import EmployeeContext from 'context/context';
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

/**
 * Create all the parts of the state and methods that will be accessible from any component of the website
 * @param {object} children 
 * @return {void}
 */
const GlobalState = props => {
    const employee = [];
    const [listState, dispatch] = useReducer(employeeReducer, { employeeList: [] });

    // Distributes the ADD_EMPLOYEE action object
    const addEmployeeToList = employee => {
        return dispatch({ type: ADD_EMPLOYEE, employee: employee });
    };

    return (
        <EmployeeContext.Provider 
            value = {{
                employee : employee,
                list: listState,
                addEmployeeToList: addEmployeeToList,
            }}
        >
            {props.children}
        </EmployeeContext.Provider>
    );
};

GlobalState.propTypes = {
    children : PropTypes.object,
};

export default GlobalState;

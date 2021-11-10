import { ADD_EMPLOYEE } from 'utils/constants';
import { employeeReducer } from 'context/reducers';
import EmployeeContext from 'context/context';
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const GlobalState = props => {
    const employee = [];
    const [listState, dispatch] = useReducer(employeeReducer, { employeeList: [] });

    const addEmployeeToList = employee => {
        dispatch({ type: ADD_EMPLOYEE, employee: employee });
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

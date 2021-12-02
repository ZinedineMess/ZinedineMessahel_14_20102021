import { ADD_EMPLOYEE } from 'utils/constants';

/**
 * Create a new list from the first one and add the new employee to the list
 * @param {object} employee
 * @param {object} state
 * @return {void}
 */
const addEmployeeToList = (employee, state) => {
    const updatedList = [...state.employeeList];
    updatedList.push({...employee});
    return {...state, employeeList: updatedList};
}

/**
 * Use state and actions to implement our application logic, return a new state.
 * @param {object} state
 * @param {object} action
 * @return {void}
 */
export const employeeReducer = (state, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return addEmployeeToList(action.employee, state);
        default: 
            return state;
    };
};

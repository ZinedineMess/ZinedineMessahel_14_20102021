import { ADD_EMPLOYEE } from 'utils/constants';

const addEmployeeToList = (employee, state) => {
    const updatedList = [...state.employeeList];
    updatedList.push({...employee});
    return {...state, employeeList: updatedList};
}

export const employeeReducer = (state, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return addEmployeeToList(action.employee, state);
        default: 
            return state;
    };
};

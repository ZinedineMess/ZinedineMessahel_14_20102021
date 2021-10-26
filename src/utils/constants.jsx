import { statesOfUSA } from 'assets/data/statesOfUSA';
import { departments } from 'assets/data/departments';

const INITIAL_STATE_EMPLOYEE = {
    firstName: '',
    lastName: '',
    dateOfBirth : new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    state: statesOfUSA[0].label,
    zipCode: '',
    department: departments[0].label,
}

const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export { 
    INITIAL_STATE_EMPLOYEE, 
    ADD_EMPLOYEE,
    MONTHS, 
};

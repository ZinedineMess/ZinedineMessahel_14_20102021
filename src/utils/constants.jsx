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

export { 
    INITIAL_STATE_EMPLOYEE, 
};

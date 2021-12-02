import React from 'react';

// Allows you to create an instance of Context
export default React.createContext({
    employee : [],
    list: [],
    addEmployeeToList: () => {},
});

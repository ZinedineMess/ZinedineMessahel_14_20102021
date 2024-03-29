import 'components/DataTable/DataTable.css';
import DataTables from 'datatables-plugin-react';
import { dataTableLabels } from 'assets/data/dataTableLabels';
import EmployeeContext from 'context/context';
import moment from 'moment';
import React, { useContext } from 'react';

/**
 * Data-Table component calling on the data included in the EmployeeContext
 * @return {void}
 */
const Table = () => {
    const context = useContext(EmployeeContext);
    let employees = context.list.employeeList || [];

    employees = employees.map((employee) => ({
        ...employee,
        birthdate: moment(employee.birthdate).format('MM/DD/yyyy'),
        startDate: moment(employee.startDate).format('MM/DD/yyyy')
    }));

    return <DataTables labels={dataTableLabels} data={employees} />
}

export default Table;

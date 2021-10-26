import 'components/Form/Form.css';
import { departments } from 'assets/data/departments';
import DropDown from 'components/DropDown/DropDown';
import { INITIAL_STATE_EMPLOYEE } from 'utils/constants';
import Input from 'components/Input/Input';
import React, { useState } from 'react';
import { statesOfUSA } from 'assets/data/statesOfUSA';

const Form = () => {
    const [newEmployee, setNewEmployee] = useState(INITIAL_STATE_EMPLOYEE);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            newEmployee.firstName.trim().length === 0 ||
            newEmployee.lastName.trim().length === 0 ||
            newEmployee.street.trim().length === 0 ||
            newEmployee.city.trim().length === 0 ||
            newEmployee.zipCode.trim().length === 0
            ) {
            return setErrorMessage('Please fill in all fields');
        }
        setErrorMessage('');
    }

    return (
        <section className="container">
            <form action="#" id="createEmployee" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <Input inputType='text' inputName='firstName' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                <label htmlFor="lastName">Last Name</label>
                <Input inputType='text' inputName='lastName' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <label htmlFor="startDate">Start Date</label>
                <fieldset className="address">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <Input inputType='text' inputName='street' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                    <label htmlFor="city">City</label>
                    <Input inputType='text' inputName='city' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                    <label htmlFor="state">State</label>
                    <DropDown inputName='state' options={statesOfUSA} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                    <label htmlFor="zip-code">Zip Code</label>
                    <Input inputType='text' inputName='zipCode' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                </fieldset>
                <label htmlFor="department">Department</label>
                <DropDown inputName='department' options={departments} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                <span className="errorMessage">{errorMessage}</span>
                <button className="btn-submit" type="submit">Save</button>
            </form>
        </section>
    );
}

export default Form;

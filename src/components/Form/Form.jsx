import 'components/Form/Form.css'; 
import CreateDatePicker from 'components/DatePicker/DatePicker';
import { departments } from 'assets/data/departments';
import DropDown from 'components/DropDown/DropDown';
import EmployeeContext from 'context/context';
import { INITIAL_STATE_EMPLOYEE } from 'utils/constants';
import Input from 'components/Input/Input';
import React, { useState, useContext } from 'react';
import { statesOfUSA } from 'assets/data/statesOfUSA';
import {Modal, useModal} from 'react-top-modal';
import { Link } from 'react-router-dom';

/**
 * React Form component allowing user to add employee to list, which will be passed to Data-Table using React Context.
 * If the fields of the table are not correctly filled in an error message will appear.
 * @return {void}
 */
const Form = () => {
    const [newEmployee, setNewEmployee] = useState(INITIAL_STATE_EMPLOYEE);
    const [errorMessage, setErrorMessage] = useState('');
    const context = useContext(EmployeeContext);
    const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();

    /**
     * Function called when submitting the form when clicking on the 'Save' button
     * If all the fields are filled in correctly, it passes the data to the EmployeeContext.
     * Otherwise an error message is displayed.
     * @param {event} e 
     * @return {void}
     */
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
        handleOpenModal('submitModal');
        setErrorMessage('');
        context.addEmployeeToList(newEmployee, setErrorMessage);
        setNewEmployee(INITIAL_STATE_EMPLOYEE);
    };

    return (
        <section className='containerWrapper'>
            <article className='formHeader'>
                <h1>NEW EMPLOYEE</h1>
            </article>
            <span className='lineForm'/>
            <form action='#' id='createEmployee' className='form'>
                <fieldset className='fieldSetEmployee'> 
                    <legend>EMPLOYEE</legend> 
                    <article className='formGroup'>
                        <div className='formGroupItems'>
                            <label htmlFor='firstName'>First Name</label>
                            <Input inputType='text' inputName='firstName' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                        <div className='formGroupItems'>
                            <label htmlFor='lastName'>Last Name</label>
                            <Input inputType='text' inputName='lastName' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                    </article>
                    <article className='formGroup'>
                        <div className='formGroupItems'>
                            <label htmlFor='birthdate'>Date of Birth</label>
                            <CreateDatePicker inputName='birthdate' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                        <div className='formGroupItems'>
                            <label htmlFor='startDate'>Start Date</label>
                            <CreateDatePicker inputName='startDate' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                    </article>
                </fieldset>
                <fieldset className='fieldSetAddress'>
                    <legend>ADDRESS</legend> 
                    <article className='formGroup'>
                        <div className='formGroupItems'>
                            <label htmlFor='street'>Street</label>
                            <Input inputType='text' inputName='street' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                        <div className='formGroupItems'>
                            <label htmlFor='city'>City</label>
                            <Input inputType='text' inputName='city' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                    </article>
                    <article className='formGroup'>
                        <div className='formGroupItems'>
                            <label htmlFor='state'>State</label>
                            <DropDown inputName='state' options={statesOfUSA} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                        <div className='formGroupItems'>
                            <label htmlFor='zipCode'>Zip Code</label>
                            <Input inputType='number' inputName='zipCode' newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                    </article>
                </fieldset>
                <fieldset className='fieldSetDepartment'>
                    <legend>DEPARTMENT</legend> 
                    <article className='formGroup'>
                        <div className='formGroupItems'>
                            <label htmlFor='department'></label>
                            <DropDown inputName='department' options={departments} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
                        </div>
                    </article>
                </fieldset>
                <div className='fieldSetSumbit'>
                    <article className='formGroup'>
                        <div className='formSubmitDiv'>
                            <button type='button' className='buttonDefault' onClick={handleSubmit}>Save</button>
                            <Modal isOpen={ showModal && activeModal === 'submitModal' } close={handleCloseModal}>
                                <br/>
                                <h3>The employee has been registered !</h3>
                                <Link to='/employee-list' className="buttonLink">
                                    <button type='button' className='buttonDefault'>Go to the list</button>
                                </Link>
                            </Modal>
                        </div>
                    </article>
                </div>
                <span className='errorMessage'>{errorMessage}</span>
            </form>
        </section>
    );
};

export default Form;

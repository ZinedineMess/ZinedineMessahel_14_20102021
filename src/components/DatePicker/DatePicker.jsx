import DatePicker from 'react-datepicker';
import { FaRegHandPointDown, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { getMonth, getYear } from 'date-fns';
import { MONTHS } from 'utils/constants';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import React, { Fragment } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const CreateDatePicker = props => {
    const YEARS = range(1920, getYear(new Date()) + 1, 1);

    return (
        <Fragment>
            <DatePicker
                renderCustomHeader={({
                    date,
                    changeMonth,
                    changeYear,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisable,
                }) => (
                <div className='date-picker__header'>
                    <button type='button' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}><FaChevronCircleLeft /></button>
                    <select
                        value={MONTHS[getMonth(date)]}
                        onChange={({ target: { value } }) => changeMonth(MONTHS.indexOf(value))}>
                        {MONTHS.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))};
                    </select>
                    <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}>
                        {YEARS.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))};
                    </select>
                    <button type='button' onClick={increaseMonth} disabled={nextMonthButtonDisable}><FaChevronCircleRight /></button>
                </div>
            )}
                todayButton={<FaRegHandPointDown />}
                useWeekdaysShort={true}
                showPopperArrow={false}
                selected={props.newEmployee[props.inputName]}
                onChange={(date) => {
                    props.setNewEmployee((state) => ({
                        ...state,
                        [props.inputName]: date
                    }));
                }}
            />
        </Fragment>
    );
};

CreateDatePicker.propTypes = {
    newEmployee : PropTypes.object.isRequired,
    inputName : PropTypes.string.isRequired,
    setNewEmployee : PropTypes.func.isRequired,
};

export default CreateDatePicker;

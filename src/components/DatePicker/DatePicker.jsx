import DatePicker from 'react-datepicker';
import 'components/DatePicker/DatePicker.css';
import { getMonth, getYear } from 'date-fns';
import { MONTHS } from 'utils/constants';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const CreateDatePicker = props => {
    const YEARS = range(1920, getYear(new Date()) + 1, 1);

    return (
        <>
            <DatePicker
                ariaLabelledBy={props.inputName}
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
                    <button type='button' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}><i className="fas fa-chevron-left"></i></button>
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
                    <button type='button' onClick={increaseMonth} disabled={nextMonthButtonDisable}><i className="fas fa-chevron-right"></i></button>
                </div>
            )}
                todayButton={<i className="fas fa-calendar-day"></i>}
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
        </>
    );
};

CreateDatePicker.propTypes = {
    newEmployee : PropTypes.object.isRequired,
    inputName : PropTypes.string.isRequired,
    setNewEmployee : PropTypes.func.isRequired,
};

export default CreateDatePicker;

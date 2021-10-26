import 'components/Header/Header.css';
import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <header className='header'>
            <h1>HRnet</h1>
            <Link to="/">HomePage</Link>
            <br/>
            <Link to="/new-employee">Create Employee</Link>
            <br/>
            <Link to="/employee-list">View Current Employees</Link>
        </header>
    )
}

export default Header;

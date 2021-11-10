import 'components/MainNavBar/MainNavBar.css'; 
import { FaComments, FaCompress, FaBell, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';
import PropTypes from 'prop-types';
import React from 'react';

const MainNavBar = props => {    
    return (
        <header className='header'>
            <nav className='mainNavBar'>
                <FaBars className='navBarIcon' onClick={props.toggle} />
                <Link to='/'>
                    <img src={logo} alt='navBarLogo' className='navBarLogo'></img>
                </Link>
                <ul className='navBarRight'>
                    <li className='navBarRightItem'>
                        <div className='navBarRightLink'>
                            <FaComments className='navBarIcon'/>
                            <span className='badgeMessNotif'>3</span>
                        </div>
                    </li>
                    <li className='navBarRightItem'>
                        <div className='navBarRightLink'>
                            <FaBell className='navBarIcon'/>
                            <span className='badgeNotif'>15</span>
                        </div>
                    </li>
                    <li className='navBarRightItem'>
                        <div className='navBarRightLink' data-widget='fullscreen' role='button'>
                            <FaCompress className='navBarIcon'/>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

MainNavBar.propTypes = {
    toggle : PropTypes.func.isRequired,
};

export default MainNavBar;

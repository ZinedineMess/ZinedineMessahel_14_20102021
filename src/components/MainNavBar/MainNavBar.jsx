import 'components/MainNavBar/MainNavBar.css'; 
import { Link } from 'react-router-dom';
import logoHeader from 'assets/img/logoHeader.webp';
import PropTypes from 'prop-types';
import React from 'react';

const MainNavBar = props => {    
    return (
        <header className='header'>
            <nav className='mainNavBar'>
                <i className="fas fa-bars navBarIcon" onClick={props.toggle}></i>
                <Link to='/'>
                    <img src={logoHeader} alt='navBarLogo' className='navBarLogo'></img>
                </Link>
                <ul className='navBarRight'>
                    <li className='navBarRightItem'>
                        <div className='navBarRightLink'>
                            <i className="far fa-comments navBarIcon"></i>
                            <span className='badgeMessNotif'>3</span>
                        </div>
                    </li>
                    <li className='navBarRightItem'>
                        <div className='navBarRightLink'>
                            <i className="far fa-bell navBarIcon"></i>
                            <span className='badgeNotif'>15</span>
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

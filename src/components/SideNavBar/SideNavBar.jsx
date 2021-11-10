import 'components/SideNavBar/SideNavBar.css';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoDark from 'assets/logoDark.png';
import PropTypes from 'prop-types';
import React from 'react';
import user from 'assets/user.png';

const SideNavBar = props => {
    return (
        <div className={`sideBarOverlay ${props.showSideBar ? 'showOverlay' : 'hideOverlay'} `} onClick={props.toggle}>
            <aside className={`sideBar ${props.showSideBar ? 'showSideBar' : 'hideSideBar'} `} onClick={(e) => e.stopPropagation()}>
                <Link to='/' className='sideBarHeader'>
                    <img src={logoDark} alt='sideBarLogo' className='sideBarLogo'></img>
                    <h2 className='sideBarTitle'>HR Net</h2>
                    <div className='line'/>
                </Link>
                <nav className='sideBarMenu'>
                    <article className='sideBarInfoUser'>
                        <img src={user} alt='userProfileImage' className='sideBarUserImg'></img>
                        <Link to='/' className='sideBarUserName'><h3>Clark Kent</h3></Link>
                    </article>
                    <ul className='sideBarNav' role='menu'>
                        <li className='sideBarNavItem'>
                            <Link to='./' className='sideBarNavLink'>
                                <FaUserPlus />
                                <p>New Employee</p>
                            </Link>
                        </li>
                        <div className='line'/>
                        <li className='sideBarNavItem'>
                            <Link to='/employee-list' className='sideBarNavLink'>
                                <FaUsers />
                                <p>Employees List</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <section className='sideNavBarFooter'> 
                    <h2>HRNet © 2021</h2>
                    <p>All right reserved.</p>
                    <Link to='/' className='privacyPolicy'>Privacy Policy</Link>
                </section>
            </aside>
        </div>
    );
};

SideNavBar.propTypes = {
    showSideBar : PropTypes.bool.isRequired,
    toggle : PropTypes.func.isRequired,
};

export default SideNavBar;

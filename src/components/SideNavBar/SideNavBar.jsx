import 'components/SideNavBar/SideNavBar.css';
import { Link } from 'react-router-dom';
import logoSideNav from 'assets/img/logoSideNav.webp';
import PropTypes from 'prop-types';
import React from 'react';
import user from 'assets/img/user.webp';

const SideNavBar = props => {
    return (
        <div className={`sideBarOverlay ${props.showSideBar ? 'showOverlay' : 'hideOverlay'} `} onClick={props.toggle}>
            <aside className={`sideBar ${props.showSideBar ? 'showSideBar' : 'hideSideBar'} `} onClick={(e) => e.stopPropagation()}>
                <Link to='/' className='sideBarHeader'>
                    <img src={logoSideNav} alt='sideBarLogo' className='sideBarLogo'></img>
                    <h2 className='sideBarTitle'>HR Net</h2>
                    <div className='line'/>
                </Link>
                <nav className='sideBarMenu'>
                    <article className='sideBarInfoUser'>
                        <img src={user} alt='userProfileImage' className='sideBarUserImg'></img>
                        <Link to='/' className='sideBarUserName'><h3>Clark Kent</h3></Link>
                    </article>
                    <br/>
                    <ul className='sideBarNav' role='menu'>
                        <li className='sideBarNavItem'>
                            <Link to='./' className='sideBarNavLink'>
                                <i className="fas fa-user-plus"></i>
                                <p>New Employee</p>
                            </Link>
                        </li>
                        <br/>
                        <div className='line'/>
                        <li className='sideBarNavItem'>
                            <Link to='/employee-list' className='sideBarNavLink'>
                                <i className="fas fa-users"></i>
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

import React, { useState } from 'react';
import MainNavBar from 'components/MainNavBar/MainNavBar';
import SideNavBar from 'components/SideNavBar/SideNavBar';

/**
 * React component comprising the two navigation bars of the website.
 * It passes the 'toggle' function which will allow me to display the SideNavBar component to the MainNavBar component
 * @return {void}
 */
const Nav = () => {
    const [displaySideMenu, setDisplaySideMenu] = useState(false);

    // Function that changes the state of displaySideMenu in order to make it appear or hide it
    const toggle = () => {
        return setDisplaySideMenu(!displaySideMenu);
    };

    // Function that changes the state of displaySideMenu in order to make it appear or hide when the user scrolls
    window.addEventListener('wheel', (e) => {
        if (displaySideMenu) {
            return setDisplaySideMenu(false);
        }
    });
    
    return (
        <>
            <MainNavBar toggle={toggle} />
            <SideNavBar showSideBar={displaySideMenu} toggle={toggle} />
        </>
    );
};

export default Nav;

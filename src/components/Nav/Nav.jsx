import React, { useState } from 'react';
import MainNavBar from 'components/MainNavBar/MainNavBar';
import SideNavBar from 'components/SideNavBar/SideNavBar';

const Nav = () => {
    const [displaySideMenu, setDisplaySideMenu] = useState(false);

    const toggle = () => {
        return setDisplaySideMenu(!displaySideMenu);
    };

    window.addEventListener('wheel', (e) => {
        if (displaySideMenu) {
            setDisplaySideMenu(false)
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

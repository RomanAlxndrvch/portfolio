import React, {useEffect, useState} from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DraftsIcon from '@mui/icons-material/Drafts';

type NavbarPropsType = {
    isMenuOpen: boolean
    changeMenuStatus: (e: boolean) => void
    menuBtnPressed: (e: boolean) => void
    windowWidth: number
}

export const Navbar = (props: NavbarPropsType) => {

    //Open and close menu for mobile and desktop version auto

    useEffect(() => {

        if (props.windowWidth < 1300) {
            props.changeMenuStatus(false)
            props.menuBtnPressed(false)
        }
    }, [props.windowWidth])
    if (props.windowWidth > 1300) props.changeMenuStatus(true)


    //Close menu after click on menu
    const navLinkClickHandler = () => {
        if (props.windowWidth < 1300) {
            props.changeMenuStatus(false)
            props.menuBtnPressed(false)
        }
    }


    return (
        <div>
            <aside
                className={props.isMenuOpen ?
                    classes.navbar + ' ' + classes.open :
                    classes.navbar + ' ' + classes.close}>
                <div className={classes.navbarContainer}>
                    <span className={classes.navTopWord}>WELCOME</span>
                    <nav className={classes.nav}>

                        <NavLink
                            onClick={navLinkClickHandler}
                            className={({isActive}) =>
                                (isActive ? classes.active : ' ')}
                            to={'/home'}>
                            <CottageIcon style={{color: 'black'}} fontSize={"small"}/> Home
                        </NavLink>

                        <NavLink
                            onClick={navLinkClickHandler}
                            className={({isActive}) =>
                                (isActive ? classes.active : ' ')} to={'/about'}>
                            <PersonPinIcon style={{color: 'black'}} fontSize={"small"}/> About
                        </NavLink>

                        <NavLink
                            onClick={navLinkClickHandler}
                            className={({isActive}) =>
                                (isActive ? classes.active : ' ')} to={'/projects'}>
                            <BusinessCenterIcon style={{color: 'black'}} fontSize={"small"}/> Projects
                        </NavLink>

                        <NavLink
                            onClick={navLinkClickHandler}
                            className={({isActive}) =>
                                (isActive ? classes.active : ' ')} to={'/contacts'}>
                            <DraftsIcon style={{color: 'black'}} fontSize={"small"}/> Contacts
                        </NavLink>

                    </nav>
                    <div className={classes.createInfo}>
                        <a className={classes.link} style={{opacity: '0.7', fontStyle: 'italic'}}
                           href={'https://www.linkedin.com/in/roman-troian/'}
                           target="_blank">Created By Roman Troian</a>
                    </div>
                </div>
            </aside>
        </div>
    )
}
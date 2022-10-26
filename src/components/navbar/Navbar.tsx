import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DraftsIcon from '@mui/icons-material/Drafts';


export const Navbar = () => {


    return (
        <div>
            <aside className={classes.navbar}>
                <div className={classes.navbarContainer}>
                    <span className={classes.navTopWord}>WELCOME</span>
                    <nav className={classes.nav}>

                        <NavLink
                            className={({isActive}) =>
                                (isActive ? classes.active : ' ')}
                            to={'/home'}>
                            <CottageIcon style={{color: 'black'}} fontSize={"small"}/> Home
                        </NavLink>

                        <NavLink className={({isActive}) =>
                            (isActive ? classes.active : ' ')} to={'/about'}>
                            <PersonPinIcon style={{color: 'black'}} fontSize={"small"}/> About
                        </NavLink>

                        <NavLink className={({isActive}) =>
                            (isActive ? classes.active : ' ')} to={'/projects'}>
                            <BusinessCenterIcon style={{color: 'black'}} fontSize={"small"}/> Projects
                        </NavLink>

                        <NavLink className={({isActive}) =>
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
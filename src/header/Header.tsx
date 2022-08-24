import React from "react";
import classes from './Header.module.css'
import Nav from "../nav/Nav";

function Header() {
    return (
        <div className={classes.header}>
            <Nav/>
        </div>
    )
}


export default Header
import React from "react";
import classes from './MenuButton.module.css'


type MenuButtonPropsType = {
    isMenuOpen: boolean
    changeMenuStatus: (e: boolean) => void
}

export const MenuButton = (props: MenuButtonPropsType) => {

    const openMenuHandler = () => {
        props.changeMenuStatus(true)
    }

    const closeMenuHandler = () => {
        props.changeMenuStatus(false)
    }


    return (
        <div className={classes.button} onClick={props.isMenuOpen ? closeMenuHandler : openMenuHandler}>
            <div></div>
        </div>
    )
}
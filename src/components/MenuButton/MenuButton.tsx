import React from "react";
import classes from './MenuButton.module.css'


type MenuButtonPropsType = {
    isMenuOpen: boolean
    changeMenuStatus: (e: boolean) => void
    menuBtnPressed: (e: boolean) => void
}

export const MenuButton = (props: MenuButtonPropsType) => {

    const openMenuHandler = () => {
        console.log('1')
        props.changeMenuStatus(true)
        props.menuBtnPressed(true)
    }

    const closeMenuHandler = () => {
        console.log('2')
        props.changeMenuStatus(false)
        props.menuBtnPressed(false)
    }


    return (
        <div className={classes.button} onClick={props.isMenuOpen ? closeMenuHandler : openMenuHandler}>
            {/*{<input type="checkbox" className={classes.navCheckbox} id='toggle'
                    onClick={props.isMenuOpen ? closeMenuHandler : openMenuHandler}/>}*/}
            <label htmlFor='toggle' className={classes.navBtn}>
                <span
                    className={classes.navigationIcon}>&nbsp;</span>
            </label>
        </div>
    )
}
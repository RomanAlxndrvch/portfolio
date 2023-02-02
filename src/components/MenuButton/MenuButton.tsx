import React, {useEffect, useState} from "react";
import classes from './MenuButton.module.css'


type MenuButtonPropsType = {
    isMenuOpen: boolean
    changeMenuStatus: (e: boolean) => void
    menuBtnPressed: (e: boolean) => void
}

export const MenuButton = (props: MenuButtonPropsType) => {

    const [buttonItems, setButtonItems] = useState(classes.buttonItems + ' ' + classes.unclicked)

    const updateButton = () => {
        if (!props.isMenuOpen) setButtonItems(classes.buttonItems + ' ' + classes.clicked)
        else setButtonItems(classes.buttonItems + ' ' + classes.unclicked)
    }

    useEffect(() => {
        !props.isMenuOpen && setButtonItems(classes.buttonItems + ' ' + classes.unclicked)
    }, [props.isMenuOpen])

    const openMenuHandler = () => {
        props.changeMenuStatus(true)
        props.menuBtnPressed(true)
        updateButton()
    }

    const closeMenuHandler = () => {
        props.changeMenuStatus(false)
        props.menuBtnPressed(false)
        updateButton()
    }


    return (
        <div className={classes.button} onClick={props.isMenuOpen ? closeMenuHandler : openMenuHandler}>
            {/*  {<input type="checkbox" className={classes.navCheckbox} id='toggle'
                    onClick={props.isMenuOpen ? closeMenuHandler : openMenuHandler}/>}
            <label htmlFor='toggle' className={classes.navBtn}>
                <span
                    className={classes.navigationIcon}>&nbsp;</span>
            </label>*/}
            <nav>
                <div className={classes.menuButton}>
                    <div className={buttonItems}></div>
                    <div className={buttonItems}></div>
                    <div className={buttonItems}></div>
                </div>
            </nav>
        </div>
    )
}
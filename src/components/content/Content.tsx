import React from "react";
import classes from './Content.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {About} from "../About/About";
import {Contacts} from "../Contacts/Contacts";
import {Projects} from "../Projects/Projects";

type ContentPropsType = {
    windowWidth: number
    menuBtnPressed: boolean
}

export const Content = (props: ContentPropsType) => {
    return (
        <div
            className={props.menuBtnPressed ? classes.contentContainer + ' ' + classes.darkBackground : classes.contentContainer}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/home'}/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/projects'} element={<Projects windowWidth={props.windowWidth}/>}/>
                <Route path={'/contacts'} element={<Contacts/>}/>
            </Routes>
        </div>
    )
}
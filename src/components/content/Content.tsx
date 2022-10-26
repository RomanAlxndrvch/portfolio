import React from "react";
import classes from './Content.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {About} from "../About/About";
import {Contacts} from "../Contacts/Contacts";
import {Projects} from "../Projects/Projects";


export const Content = () => {
    return (
        <div className={classes.contentContainer}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/home'}/>}/>

                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/projects'} element={<Projects/>}/>
                <Route path={'/contacts'} element={<Contacts/>}/>
            </Routes>
        </div>
    )
}
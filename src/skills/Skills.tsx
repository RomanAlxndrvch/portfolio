import React from "react";
import classes from './Skills.module.css'
import containerStyles from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${containerStyles.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title}>Skills </h2>
                <div className={classes.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    )
}

export default Skills
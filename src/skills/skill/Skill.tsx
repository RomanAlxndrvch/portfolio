import React from "react";
import classes from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}></div>
            <h3>{props.title}</h3>
            <span className="description">
                {props.description}
            </span>
        </div>
    )
}

export default Skill
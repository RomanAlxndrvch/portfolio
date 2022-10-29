import React from "react";
import classes from './Projectcart.module.css'


type projectCartPropsType = {
    url: string
    gitHubLink: string
    picture: string
}

export const ProjectCart = (props: projectCartPropsType) => {
    return (
        <div className={classes.projectCardContainer}>
            <img src={props.picture} alt="" className={classes.img}/>
        </div>
    )
}
import React from "react";
import classes from './Projects.module.css'
import {ProjectCart} from "./ProjectCart/ProjectCart";
import todoListPicture from './../../assets/images/TodoList.jpg'

export const Projects = () => {
    const projectInfo = [
        {url: '', gitHubLink: '', picture: todoListPicture}
    ]
    return (
        <section className={classes.projectContainer}>
            <div className={classes.mainContainer}>
                <h3>Creative Portfolio</h3>
                <div>
                    {projectInfo.map(el => <ProjectCart url={el.url} gitHubLink={el.gitHubLink} picture={el.picture}/>)}
                </div>
            </div>
        </section>
    )
}
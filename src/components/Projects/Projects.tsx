import React from "react";
import classes from './Projects.module.css'
import {ProjectCart} from "./ProjectCart/ProjectCart";
import todoListPicture from './../../assets/images/TodoList.jpg'

export const Projects = () => {
    const projectInfo = [
        {
            url: '',
            gitHubLink: 'https://github.com/RomanAlxndrvch/TODO_List-Main',
            picture: todoListPicture,
            text: 'That\'s my lovest project, where I used much of my knowledge. Here I am trying to implement all the new technologies which I learned in past, and test many features i seen. \n' +
                'For this project i used : TypeScript, CSS,  React ,Redux ,Redux Toolkit  ,Snapshot testing, Unit testing, StoryBook ,Material UI '
        }
    ]
    return (
        <section className={classes.projectContainer}>
            <div className={classes.mainContainer}>
                <h3>Creative Portfolio</h3>
                <div>
                    {projectInfo.map((el, index) => <div className={classes.projectCart}><ProjectCart key={index}
                                                                                                      url={el.url}
                                                                                                      gitHubLink={el.gitHubLink}
                                                                                                      picture={el.picture}/>
                        <span style={{width: '30%', paddingTop: '20px'}}>{el.text}</span>
                    </div>)}
                </div>
            </div>
        </section>
    )
}
import React from "react";
import classes from './Projects.module.css'
import {ProjectCart} from "./ProjectCart/ProjectCart";
import todoListPicture from './../../assets/images/TodoList.jpg'
import socialNetworkPicture from './../../assets/images/SocalNetwork.png'
import myProject from './../../assets/images/MyProject2.png'

export const Projects = () => {
    const projectInfo = [
        {
            url: ' ',
            gitHubLink: 'https://github.com/RomanAlxndrvch/TODO_List-Main',
            picture: todoListPicture,
            name: 'ToDo List',
            text: 'That\'s my lovest project, where I used much of my knowledge. Here I am trying to implement all the new technologies which I learned in past, and test many features i seen. \n' +
                'For this project i used : TypeScript, CSS,  React ,Redux ,Redux Toolkit  ,Snapshot testing, Unit testing, StoryBook ,Material UI '
        },
        {
            url: false,
            gitHubLink: 'https://github.com/RomanAlxndrvch/SocialNetwork',
            picture: socialNetworkPicture,
            name: 'Social Network',
            text: 'With this project, I learned how to work with classes components, which could be handy with some old applications. Researched how to work Redux under the hood, was working with old libraries '
        },
        {
            url: false,
            gitHubLink: 'https://github.com/RomanAlxndrvch/Counter2',
            picture: myProject,
            name: 'Counter',
            text: 'My very first project. Here I still test the new library and features. A nice small app to see how some things work :)'
        },

    ]
    return (
        <section className={classes.projectContainer}>
            <div className={classes.mainContainer}>
                <h6 className={classes.h6}>Creative Portfolio</h6>
                <div className={classes.cartContainer}>
                    {projectInfo.map((el, index) => <div className={classes.projectCart}><ProjectCart key={index}
                                                                                                      url={el.url}
                                                                                                      gitHubLink={el.gitHubLink}
                                                                                                      picture={el.picture}/>
                        <span style={{
                            height: 'min-content',
                            width: '32%',
                            order: index % 2 === 0 ? '2' : '0'
                        }}><div className={classes.projectName}>{el.name}</div>
                            {el.text}</span>

                    </div>)}
                </div>
            </div>
        </section>
    )
}
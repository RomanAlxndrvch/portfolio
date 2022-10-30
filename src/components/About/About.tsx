import React from "react";
import MyPic from '../../assets/images/myPhoto2.jpg'
import classes from './About.module.css'

export const About = () => {
    const shortInfoContent = [
        {info: "Birthday:", content: '04.12.1994'},
        {info: "Location:", content: 'Lethbridge,AB,Canada'},
        {info: "Email:", content: 'romantroian94@gmail.com'},
        {info: "Study:", content: 'Vinnytsia National Technical University'},
        {info: "Hobbies:", content: 'Computer games,Software engineering'},
    ]
    return (
        <div className={classes.aboutContainer}>
            <img src={MyPic} alt="MyPic" className={classes.img}/>
            <section className={classes.infoContainer}>
                <div className={classes.aboutMe}>
                    <h3>Roman Troian & Front-end developer</h3>
                    <p style={{paddingBottom: '30px'}}>I’m a Front-End Developer located in Canada,AB.
                        Well-organised person, problem solver,employee with high attention to detail. Fan of computer
                        games, outdoor,movies and technologies. A family person and father of son,
                        Interested in the entire frontend spectrum and working on ambitious projects with positive
                        people.</p>
                    <h3>Skills</h3>
                    <p>JavaScript · TypeScript · CSS · HTML · React · Redux · Redux Toolkit · GitHub · LESS · SASS ·
                        Rest API · Snapshot
                        testing · Unit testing · Git · StoryBook · Material UI · Axios · Formik and many more </p>
                </div>

                <div className={classes.shortInfo}>
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                        {shortInfoContent.map((el, index) => {
                            return <tr key={index}>
                                <td className={classes.infoName}>{el.info}</td>
                                <td>{el.content}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
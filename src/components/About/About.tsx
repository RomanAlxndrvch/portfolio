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
                </div>
                <div className={classes.shortInfo}>
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                        {shortInfoContent.map(el => {
                            return <tr>
                                <td className={classes.infoName}>{el.info}</td>
                                <td className={classes.infoContent}>{el.content}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}
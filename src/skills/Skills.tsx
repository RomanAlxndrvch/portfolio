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
                    <Skill title={'JS'}
                           description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}/>

                    <Skill title={'CSS'}
                           description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old'}/>

                    <Skill title={'REACT'}
                           description={'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills

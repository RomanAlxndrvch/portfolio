import React from "react";
import classes from './Home.module.css'
import {ReactComponent as GitNubIcon} from '../../assets/icons/SVG/github.svg'
import {ReactComponent as LinkedinIcon} from '../../assets/icons/SVG/linkedin-square.svg'
import {ReactComponent as TelegramIcon} from '../../assets/icons/SVG/paper-plane.svg'
import {ReactComponent as MailIcon} from '../../assets/icons/SVG/envelope.svg'
import {Icon} from "./Icon/Icon";


export const Home = () => {

    const homeLinks = [
        {icon: <LinkedinIcon/>, link: 'https://www.linkedin.com/in/romantroian/', styles: {}}
    ]

    return (
        <section className={classes.homeContainer}>
            <div className={classes.imgAndInfo}>
                <div className={classes.imgContainer}>
                    <div className={classes.img}></div>
                </div>
                <div className={classes.info}>
                    <h3 className={classes.name}>ROMAN TROIAN</h3>
                    <p className={classes.text}>Im a Frontend Web Developer using web
                        technologies to build products and focusing on solving problems for
                        different niches and different indusries using the power of
                        technology
                    </p>
                    <div className={classes.iconContainer}>

                        {homeLinks.map(el => <Icon icon={el.icon} link={el.link} styles={el.styles}/>)}

                        {/* <a className={classes.icon} href="#">
                            <GitNubIcon style={{height: '22px'}}/>
                        </a>
                        <a href="#">
                            <LinkedinIcon style={{height: '22px'}}/>
                        </a>
                        <a href="https://t.me/roman_alxndrvch" target={'_blank'}>
                            <TelegramIcon style={{height: '18px', transform: 'translateY(-2.5px)'}}/>
                        </a>
                        <a href="#">
                            <MailIcon style={{height: '22px'}}/>
                        </a>*/}
                    </div>

                </div>
            </div>
        </section>
    )
}
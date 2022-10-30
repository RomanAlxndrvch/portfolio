import React, {useState} from "react";
import classes from './Projectcart.module.css'
import {Button} from "@mui/material";


type projectCartPropsType = {
    url: string
    gitHubLink: string
    picture: string
}

export const ProjectCart = (props: projectCartPropsType) => {
    const [onHover, setOnHover] = useState(false)
    const onHoverOn = () => setOnHover(true)
    const onHoverOff = () => setOnHover(false)
    const buttonStyle = {
        fontFamily: 'Montserrat',
        zIndex: onHover ? 10 : 0,
        color: '#000',
        backgroundColor: '#F8F8F8',
        borderRadius: '50px',
        ':hover': {
            backgroundColor: '#767676',
            color: '#fff'
        }
    }

    return (
        <div onMouseOver={onHoverOn} onMouseLeave={onHoverOff} className={classes.projectCardContainer}>
            <div style={{zIndex: onHover ? 10 : 0}}
                 className={classes.btnContainer}>

                <a href={props.url} style={{textDecoration: 'none'}} target={'_blank'}>
                    <Button size={"large"} onMouseOver={onHoverOn} onMouseLeave={onHoverOff} variant={"contained"}
                            sx={buttonStyle}>Link</Button>
                </a>

                <a href={props.gitHubLink} style={{textDecoration: 'none'}} target={'_blank'}>
                    <Button size={"large"} onMouseOver={onHoverOn} onMouseLeave={onHoverOff} variant={"contained"}
                            sx={buttonStyle}>GitHub</Button>
                </a>

            </div>
            <img src={props.picture} alt="" className={onHover ? `${classes.img} ${classes.imgHover}` : classes.img}/>
        </div>
    )
}
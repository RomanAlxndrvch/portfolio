import React, {useState} from "react";
import {NavLink} from "react-router-dom";

type IconPropsType = {
    icon: string
    link: string
    linkStyle: string
    styles?: {}
    scale?: number
}

export const Icon = (props: IconPropsType) => {
    const [onHover, setOnHover] = useState(false)
    const hoverTrue = () => {
        setOnHover(true)
    }
    const hoverFalse = () => {
        setOnHover(false)
    }

    const IconStyle = {
        width: '30px',
        height: '27px',
        transition: '250ms',
        transform: `scale(${props.scale ? props.scale : 1}) translateY(${onHover ? '-5px' : '0'})`,
        fill: `${onHover ? '#767676' : 'black'}`
    }

    return (
        props.linkStyle === 'link' ?
            <a href={props.link} target={'_blank'} onMouseOver={hoverTrue} onMouseLeave={hoverFalse}>
                <svg style={IconStyle}>
                    <path
                        d={props.icon}/>
                </svg>
            </a> : <NavLink to={props.link}>
                <svg style={IconStyle}>
                    <path
                        d={props.icon}/>
                </svg>
            </NavLink>
    )
}
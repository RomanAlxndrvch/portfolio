import React from "react";
import classes from './Main.module.css'
import containerStyle from './../common/styles/Container.module.css'

function Main() {
    return (
        <div className={classes.mainBlock}>
            <div className={containerStyle.container}>
                <div className={classes.greeting}>
                    <span>Hi There</span>
                    <h1>I am Roman Troian</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={classes.photo}>

                </div>
            </div>
        </div>
    )
}

export default Main
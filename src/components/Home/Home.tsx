import React from "react";
import classes from './Home.module.css'
import MyPhoto from "../../assets/images/MyPhoto.jpg"


export const Home = () => {
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
                </div>
            </div>
        </section>
    )
}
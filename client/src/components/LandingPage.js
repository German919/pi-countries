import React from "react";
import {Link} from "react-router-dom";
import styles from "./landing.module.css";

const LandingPage = () => {

    return (
        <div>
            <h1 className={styles.title}>Welcome to henry's world</h1>
            <div className={styles.container}>

                <div className={styles.ldsFacebook}><div></div><div></div><div></div></div>
                
                <Link to = "/home">
                    <button className={styles.btnHome}>Start</button>
                </Link>

            </div>
        </div>
    )
}

export default LandingPage;
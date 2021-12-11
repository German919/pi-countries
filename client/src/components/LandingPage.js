import React from "react";
import {Link} from "react-router-dom";
import styles from "./landing.module.css";

const LandingPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Germán Ferreyra</h1>
                <h3 className={styles.subtitle}>Developer FullStack</h3>        
            </div>
                <div className={styles.containerBtn}>
                    <div className={styles.ldsFacebook}><div></div><div></div><div></div></div>
                
                    <Link to = "/home">
                        <button className={styles.btnHome}>Start</button>
                    </Link>
                </div>
        </div>
    )
}

export default LandingPage;
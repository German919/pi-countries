import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const CreateActivity = () => {

    return (

        <div className={styles.containerBtnCreateAct}>
            <Link to="/createActivity">
             <button className={styles.btnCreateAct}>Create activity</button>
            </Link>
        </div>
    )
}

export default CreateActivity;
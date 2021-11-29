import React from 'react';
import styles from './index.module.css';

const SearchActivity = () => {

    return (

        <div className={styles.container}>
            <select className={styles.containerSelect}>
                <option className={styles.containerSelectOp} value="">actividades1</option>
                <option className={styles.containerSelectOp} value="">actividades2</option>
            </select>
        </div>
    )
}

export default SearchActivity;
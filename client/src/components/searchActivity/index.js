import React from 'react';
import styles from './index.module.css';

const SearchActivity = ({activities}) => {

    return (

        <div className={styles.container}>
            <select className={styles.containerSelect}>
                {
                    activities && activities.map( (act, i) => (
                        <option key={i} 
                            className={styles.containerSelectOp} 
                            value={act.id}>{act.name}</option>        
                    ))
                }
            </select>
        </div>
    )
}

export default SearchActivity;
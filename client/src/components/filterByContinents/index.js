import React from 'react';
import {useDispatch} from "react-redux";
import { filterByContinents } from '../../actions';
import styles from "./index.module.css";

const FilterByContinents = ({setCurrentPage}) => {

    const dispatch = useDispatch();

    const filterContinents = (e) => {
        dispatch(filterByContinents(e.target.value))
        setCurrentPage(1)
    }
 
    return (

        <div className={styles.container}>
            <h3 className={styles.title}>Filter by continent</h3>
            <div className={styles.check}>
                <input 
                    onChange={filterContinents} 
                    type="radio" 
                    name="countries"  
                    value="All"
                    className={styles.inputCheck}
                    />
                <label>All</label>
            </div>

            <div className={styles.check}>
                <input 
                    onChange={filterContinents} 
                    type="radio" 
                    name="countries" 
                    value="Africa"
                    className={styles.inputCheck}
                    />
                <label>Africa</label>
            </div>

            <div className={styles.check}>
                <input 
                    onChange={filterContinents}
                    type="radio" 
                    name="countries" 
                    value="Oceania"
                    className={styles.inputCheck}
                    />
                <label>Oceania</label>
            </div>

            <div className={styles.check}>
                <input 
                    onChange={filterContinents}
                    type="radio"
                    name="countries" 
                    value="Europe"
                    className={styles.inputCheck}
                    />
                <label>Europe</label>
            </div>

            <div className={styles.check}>
                <input 
                    onChange={filterContinents} 
                    type="radio" 
                    name="countries" 
                    value="South America"
                    className={styles.inputCheck}
                    />
                <label>South America</label>
            </div>

            <div className={styles.check}>
                <input 
                    onChange={filterContinents} 
                    type="radio" 
                    name="countries" 
                    value="North America"
                    className={styles.inputCheck}
                    />
                <label>North America</label>
            </div>

            <div className={styles.check}>
                <input 
                    onChange={filterContinents} 
                    type="radio" 
                    name="countries" 
                    value="Asia"
                    className={styles.inputCheck}
                    />
                <label>Asia</label>
            </div>

            <div className={styles.check}>
                <input 
                    onChange={filterContinents} 
                    type="radio" 
                    name="countries" 
                    value="Antarctica"
                    className={styles.inputCheck}
                    />
                <label>Antarctica</label>
            </div>
        </div>
    )
}

export default FilterByContinents;
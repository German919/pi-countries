import React from 'react';
import styles from './index.module.css';
import {useDispatch} from "react-redux";
import { filterByActivity } from '../../actions';

const SearchActivity = ({activities, setOrder, setCurrentPage}) => {

    const dispatch = useDispatch();

    const handleFilterActivity = (e) =>{
        dispatch(filterByActivity(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    return (

        <div className={styles.container}>
            <select onChange={(e)=>handleFilterActivity(e)} className={styles.containerSelect}>
                {
                    activities && activities.map( (act, i) => (
                        <option key={i} 
                            className={styles.containerSelectOp} 
                            value={act.name}>{act.name}</option>        
                    ))
                }
            </select>
        </div>
    )
}

export default SearchActivity;
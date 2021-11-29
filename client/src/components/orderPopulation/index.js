import React from 'react';
import {useDispatch} from "react-redux";
import { orderByPopulation } from '../../actions';
import styles from "./index.module.css";


const OrderByPopulation = ({setCurrentPage, setOrder}) => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    return (

        <div className={styles.container}>
            <select className={styles.containerSelect} onChange={handleChange}>
                <option className={styles.containerSelectOp} value="mayor">higher population</option>
                <option className={styles.containerSelectOp} value="menor">smaller population</option>
            </select>
        </div>
    )
}

export default OrderByPopulation;
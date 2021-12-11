import React from 'react';
import {useDispatch} from "react-redux";
import { orderAscDesc } from '../../actions';
import styles from "./index.module.css";

const OrderAscDesc = ({setCurrentPage, setOrder}) => {

    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderAscDesc(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    return (
        <div className={styles.container}>
            <label className={styles.label}>filter by</label>
            <select className={styles.containerSelect} onChange={handleOrder}>
                <option className={styles.containerSelectOp1}>alphabet</option>
                <option className={styles.containerSelectOp} value="asc">A-Z</option>
                <option className={styles.containerSelectOp} value="desc">Z-A</option>
            </select>
        </div>
    )
}

export default OrderAscDesc;
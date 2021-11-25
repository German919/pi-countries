import React from 'react';
import {useDispatch} from "react-redux";
import { orderAscDesc } from '../../actions';

const OrderAscDesc = ({setCurrentPage, setOrder}) => {

    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderAscDesc(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </div>
    )
}

export default OrderAscDesc;
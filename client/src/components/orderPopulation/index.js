import React from 'react';
import {useDispatch} from "react-redux";
import { orderByPopulation } from '../../actions';


const OrderByPopulation = ({setCurrentPage, setOrder}) => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    return (

        <div>
            <select onChange={handleChange}>
                <option value="mayor">mayor población</option>
                <option value="menor">menor población</option>
            </select>
        </div>
    )
}

export default OrderByPopulation;
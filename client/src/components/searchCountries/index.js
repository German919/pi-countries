import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import { searchByName } from '../../actions';
import styles from "./index.module.css";

const SearchCountries = () => {

    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchByName(name));
        setName("");
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div className={styles.container}> 
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="buscar país"  
                onChange={handleChange}   
                className={styles.inputSearch}
                />
            <button className={styles.btnSearch}>buscar</button>
        </form>
    </div>
    )
}

export default SearchCountries;
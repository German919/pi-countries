import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { searchByName } from '../../actions';
import styles from "./index.module.css";

const SearchCountries = ({setCurrentPage}) => {

    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const [error, setError] = useState({name:""});

    const countries = useSelector((state)=> state.copyCountries);
    
    const validate = (value) => {
        let errors ={}
        const findCountry = countries.find(el=> el.name.toLowerCase().includes(value.toLowerCase()))
        if(!value){
            errors.name = "Required field"
        }else if(findCountry === undefined){
            errors.name = "Country not found"
        }
        return errors;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validate(name))
        if(Object.keys(validate(name)).length === 0){
            dispatch(searchByName(name));
            setCurrentPage(1)
            setName("");
        }
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
                placeholder="search country"  
                value={name}
                onChange={handleChange}   
                className={styles.inputSearch}
                name="name"
                />
            <button className={styles.btnSearch}>search</button>
            {
                error && <p className={styles.error}>{error.name}</p>
            }
        </form>
    </div>
    )
}

export default SearchCountries;
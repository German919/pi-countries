import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import { searchByName } from '../../actions';

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
        <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="buscar país"  
                onChange={handleChange}   
                />
            <button>buscar</button>
        </form>
    </div>
    )
}

export default SearchCountries;
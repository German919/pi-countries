import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllContries} from "../actions";
import Card from './Card';

const Home = () => {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getAllContries())
    },[]);
    console.log("Ger", countries);
    return(
        <div>
            {
                countries.length > 0 ? 
                    countries[0].map( (el, i) => (
                        <Card 
                            key={i} 
                            image={el.image} 
                            name={el.name} 
                            continent={el.continent} 
                        />
                    ))
                : <h1>cargando...</h1>
                
            }
        </div>
    )
}

export default Home;
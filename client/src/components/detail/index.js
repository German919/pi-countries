import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import { filterById } from "../../actions";
import styles from "./index.module.css";

const Details = () => {

    const dispatch = useDispatch();
    const country = useSelector((state) => state.details);
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(filterById(id))
    },[]);

    const handleAccept = () => {
        history.push("/home");
    }

    return (
        <>
        {
            country  && 
        
        <div className={styles.container}>
            <div className={styles.containerCountry}>
                <div className={styles.containerName}>
                    <h3>{country.name}</h3>
                </div>
                <div className={styles.containerImage}>
                    <img 
                        src={country.image && country.image[0]} 
                        alt={country.name}/>
                </div>
                <h3 className={styles.containerId}>Id: {country.id}</h3>
                <h3 className={styles.containerContinent}>Continent: {country.continent}</h3>
                <h3 className={styles.containerSubregion}>Subregion: {country.subregion}</h3>
                <h3 className={styles.containerCapital}>Capital: {country.capital}</h3>
                <h3 className={styles.containerArea}>Area km2: {country.area}</h3>
                <h3 className={styles.containerPopulation}>Population: {country.population}</h3>
       
            </div>


            <div className={styles.containerActivity}>
                <button onClick={handleAccept} className={styles.btnDetails}>Accept</button>
                <div>
                    <h3 className={styles.activityTitle}>Activities</h3>
                </div>
                <div className={styles.containerActivity1}>
                {
                    country.activities &&
                    country.activities.map(el=>(
                        <div 
                        className={country.activities.length > 2 ? styles.activities : styles.act}>
                            <h4>Name: {el.name}</h4>
                            <h4>Difficulty: {el.difficulty}</h4>
                            <h4>Duration: {el.duration}</h4>
                            <h4>Season: {el.season}</h4>
                        </div>
                    ))
                }  
                {
                    country.activities &&
                        country.activities.length === 0 ? 
                        <div className={styles.noActivity}>No Activities</div> 
                        : ""
                }

                </div>
            </div>
        </div>
        } 
    </>
    )
}

export default Details;
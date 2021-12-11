import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory, Link} from "react-router-dom";
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
               <a href={country.maps} target="_blank"> <button onClick={handleAccept} className={styles.btnMaps}>google maps</button> </a>
            </div>
           
            <div className={styles.containerActivity}>
                <button onClick={handleAccept} className={styles.btnDetails}>accept</button>
                <div>
                    <h3 className={styles.activityTitle}>Activities</h3>
                </div>
                <div className={styles.containerActivity1}>
                {
                    country.activities &&
                    country.activities.map((el, i)=>(
                        <div key={i}
                        className={country.activities.length >= 2 ? styles.activities : styles.act}>
                            <h4 className={styles.title}>{el.name.toUpperCase()}</h4>
                            <h4><span className={styles.span}>Difficulty:</span> {el.difficulty}</h4>
                            <h4><span className={styles.span}>Duration:</span> {el.duration}</h4>
                            <h4><span className={styles.span}>Season:</span> {el.season}</h4>
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
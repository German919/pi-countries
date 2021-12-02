import React from 'react';
import styles from "./card.module.css";
import {useHistory} from "react-router-dom";

const Card = ({id, image, name, continent, population}) => {

    const history = useHistory()

    const handleDetail = (id) => {
        history.push(`/home/detail/${id}`)
    }
    
    return (
        <div 
            onClick={()=>handleDetail(id)}
            className={styles.container}>
            <div className={styles.containerName}>
                <h4 className={styles.title}>{name}</h4>
            </div>
            <div className={styles.containerImagen}>
                <img className={styles.imagen} src={image[0]} alt={name} />
            </div>
            <div className={styles.containerSubtitle}>
                <h6 className={styles.subTitle}>{continent}</h6>
            </div>
            <div className={styles.containerSubtitle}>
            <h6 className={styles.population}>Population: {population}</h6>
            </div>
        </div>
    )
}

export default Card;
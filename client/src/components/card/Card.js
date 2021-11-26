import React from 'react';
import styles from "./card.module.css";

const Card = ({image, name, continent, population}) => {
    
    return (
        <div className={styles.container}>
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
                {/* <button className={styles.btnDetails}>Details</button> */}
            </div>
        </div>
    )
}

export default Card;
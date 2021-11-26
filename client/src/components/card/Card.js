import React from 'react';
import styles from "./card.module.css";

const Card = ({image, name, continent}) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.containerName}>
                <h4 className={styles.title}>{name}</h4>
            </div>
            <div className={styles.containerImagen}>
                <img className={styles.imagen} src={image[0]} alt={name} />
            </div>
            <div className={styles.containerSubtitle}>
                <h4 className={styles.subTitle}>{continent}</h4>
            </div>
            <div className={styles.containerButton}>
                <button className={styles.btnDetails}>Details</button>
            </div>
        </div>
    )
}

export default Card;